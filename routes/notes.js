const router = require('express').Router();
const date = require(__dirname + '/../libs/date.js');
const mongoose = require (__dirname + '/../libs/mongoose');
let Item = require(__dirname + '/../models/item.model.js');
let List = require(__dirname + '/../models/list.model.js');
const _ = require("lodash");

let day = date();

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

router.route('/').get((req, res) => {
  Item.Item.find({}, (err, foundItems) => {
    res.render("list", {listTitle: day, listName: 'average', newListItems: foundItems});
  });
});

router.route('/:customListName').get((req, res) => {
  const customListName = _.capitalize(req.params.customListName);

  List.List.findOne({name: customListName}, (err, foundList) => {
    if (!err){
      if (!foundList){
          res.render("list", {listTitle: day, listName: customListName, newListItems: []});
      } else {
          res.render("list", {listTitle: day, listName:foundList.name, newListItems: foundList.items});
      }
    }
  });
});

router.route('/').post((req,res)=> {
  const action = req.body.todo;
  const listName = req.body.listName;
  const item = new Item.Item({
    name: action,
    date: day
  });

  if (listName === "average"){
    item.save();
    res.redirect("/");
  } else {
    List.List.findOne({name: listName}, function(err, foundList){
      if (!err){
        if (!foundList){
          //Create a new list
          const items = [];
          items.push(item);
          const list = new List.List({
            name: listName,
            items: items
          });
          list.save();
        } else {
            foundList.items.push(item);
            foundList.save();
        }
            res.redirect("/" + listName);
        }
      });
    }
});

router.route('/delete').post((req, res) => {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === 'average') {

    Item.Item.findByIdAndRemove(checkedItemId, (err) => {
      if (!err) {
        res.redirect("/");
      }
    });
  } else {

    List.List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, (err, foundList) => {
      if (!err){
        res.redirect("/" + listName);
      }
    });
  }
});

module.exports = router;

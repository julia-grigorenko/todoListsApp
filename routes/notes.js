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

module.exports = router;

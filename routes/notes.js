const router = require('express').Router();
const date = require(__dirname + '/../libs/date.js');
const mongoose = require (__dirname + '/../libs/mongoose');
let Item = require(__dirname + '/../models/item.model.js');
let List = require(__dirname + '/../models/list.model.js');

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

module.exports = router;

const mongoose = require('mongoose');
let Item = require('./item.model.js');

const Schema = mongoose.Schema;

const listSchema = new Schema({
  name: { type: String, required: true },
  items: [Item.itemsSchema]
});

const List = mongoose.model('List', listSchema);


module.exports = {List:List, listSchema:listSchema};

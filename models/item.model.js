const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true }
});

const Item = mongoose.model('Item', itemsSchema);


module.exports = {Item:Item, itemsSchema:itemsSchema};

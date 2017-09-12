const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  description: { type: String },
  cost: { type: Number },
  quantity: { type: Number }
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;

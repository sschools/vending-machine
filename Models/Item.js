const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  description: { type: String },
  cost: { type: Number },
  quantity: { type: Number }
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;

const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
  description: { type: String },
  cost: { type: Number },
  time: { type: Date }
});

const Purchase = mongoose.model('Purchase', PurchaseSchema);

module.exports = Purchase;

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const url = 'mongodb://localhost:27017/vending';
const Item = require('./models/Item');

mongoose.connect(url, {useMongoClient: true});

function getAllItems() {
  return Item.find();
}

module.exports = {
  getAllItems
}

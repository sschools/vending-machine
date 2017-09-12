const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const url = 'mongodb://localhost:27017/vending';
const Item = require('./models/Item');

mongoose.connect(url, {useMongoClient: true});

function getAllItems() {
  return Item.find();
}

function buyItem(id, money) {
  return Item.findOne({"_id":id}).then(function(item) {
    console.log(item);
    if (money < item.cost) {
      console.log("Item cost from if statemet: ", item.cost);
      return {"status": "failed", "data":"You did not add enough money for that item."}
    } else if (item.quantity < 1) {
      return {"status": "failed", "data":"That item has run out!"}
    } else {
      console.log("Item from else code: ", item);
      Item.updateOne(item,
      {$set: {"quantity": item.quantity - 1}
      })
      return {"status": "Success", "data": item}
    }
  })
}

module.exports = {
  getAllItems,
  buyItem
}

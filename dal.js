const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const url = 'mongodb://localhost:27017/vending';
const Item = require('./models/Item');
const Purchase = require("./models/Purchase")

mongoose.connect(url, {useMongoClient: true});

function getAllItems() {
  return Item.find();
}

function buyItem(id, money) {
  return Item.findOne({"_id":id}).then(function(item) {
    if (money < item.cost) {
      return {"status": "failed", "data":"You did not add enough money for that item."}
    } else if (item.quantity < 1) {
      return {"status": "failed", "data":"That item has run out!"}
    } else {
      Item.updateOne(item,
      {$set: {"quantity": item.quantity - 1}
      })
      let newPurch = new Purchase({
        description: item.description,
        cost: item.cost,
        time: Date.now()
      });
      newPurch.save();
      return {"status": "Success", "data": {"your item": newPurch, "your change": money - item.cost}}
    }
  })
}

function getAllPurchases() {
  return Purchase.find();
}

function getTotalMoney() {
  return Purchase.find().then(function(purchases) {
    let total = 0;
    for (i=0; i < purchases.length; i++) {
      total += purchases[i].cost;
    }
    return total;
  })
}

function addItem(item) {
  let newItem = new Item(item);
  return newItem.save();
}

module.exports = {
  getAllItems,
  buyItem,
  getAllPurchases,
  getTotalMoney,
  addItem
}

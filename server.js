const express = require("express");
const {getAllItems, buyItem, getAllPurchases, getTotalMoney, addItem, updateItem} = require("./dal");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/vending/customer/items", function(req, res) {
  getAllItems().then(function(items) {
    res.json({status: "Success", data: items});
  })
});

app.post("/vending/customer/items/:itemId/purchases", function(req, res) {
  buyItem(req.body.item, req.body.money).then(function(obj) {
    res.json(obj)
  })
});

app.get("/vending/vendor/purchases", function(req, res) {
  getAllPurchases().then(function(purchases) {
    res.json({status: "Success", data: purchases});
  })
});

app.get("/vending/vendor/money", function(req, res) {
  getTotalMoney().then(function(amount) {
    res.json({status: "Success", data: amount})
  })
});

app.post("/vending/vendor/items", function(req, res) {
  addItem(req.body).then(function(obj) {
    res.json({status: "Success", data: obj});
  });
});

app.put("/vending/vendor/items/:itemId", function(req, res) {
  updateItem(req.body).then(function(obj) {
    res.json({status: "Success", data: obj});
  })
})

app.listen(3000, function () {
  console.log("Vending Machine API is running on: 3000");
});

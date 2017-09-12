const express = require("express");
const {getAllItems, buyItem} = require("./dal");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/vending/customer/items", function(req, res) {
  getAllItems().then(function(items) {
    res.json({status: "Success", data: items});
  })
})

app.post("/vending/customer/items/:itemId/purchases", function(req, res) {
  buyItem(req.body.item, req.body.money).then(function(obj) {
    res.json(obj)
  })
})

app.listen(3000, function () {
  console.log("Vending Machine API is running on: 3000");
});

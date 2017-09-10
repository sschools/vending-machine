const express = require("express");
const {getAllItems} = require("./dal");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/vending/customer/items", function(req, res) {
  getAllItems().then(function(items) {
    res.send(items);
  })
})

app.listen(3000, function () {
  console.log("Vending Machine API is running on: 3000");
});

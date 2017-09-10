const express = require("express");
const {} = require("./dal");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("Vending Machine API is running on: 3000");
});

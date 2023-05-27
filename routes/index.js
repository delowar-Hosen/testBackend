const express = require("express");
const _ = express.Router();
const api = require("./api");
require("dotenv").config();

const route = process.env.API;

_.use(route, api);

_.use(route, (res) => {
  res.json("No Api Found in this route");
});

module.exports = _;

const express = require("express");
const _ = express.Router();
const api = require("./data");

_.use("/data", api);

module.exports = _;

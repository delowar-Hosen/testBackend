const express = require("express");
const banner = require("../../controllers/banner");
const _ = express.Router();

_.post("/banner", banner);

module.exports = _;

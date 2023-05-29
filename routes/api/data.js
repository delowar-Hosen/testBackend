const express = require("express");
const banner = require("../../controllers/banner");
const bannerdata = require("../../controllers/getBannerData");
const _ = express.Router();

_.post("/banner", banner);
_.get("/getdata", bannerdata);

module.exports = _;

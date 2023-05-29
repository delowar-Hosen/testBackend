const Data = require("../models/dataModel");

const getBannerData = async (req, res) => {
  try {
    let data = await Data.find({});
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getBannerData;

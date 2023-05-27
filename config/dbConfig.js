const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConfig = () => {
  mongoose.connect(process.env.DBURL).then(() => {
    console.log("Db Connected");
  });
};

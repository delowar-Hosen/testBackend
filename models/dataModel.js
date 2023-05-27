const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const datamodel = new Schema(
  {
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    data: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Data = mongoose.model("Data", datamodel);

module.exports = Data;

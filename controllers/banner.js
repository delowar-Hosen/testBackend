const Data = require("../models/dataModel");

const banner = async (req, res) => {
  try {
    const { title, subTitle, data } = req.body;
    const user = await new Data({
      title,
      subTitle,
      data,
    }).save();
    res.json({
      id: user._id,
      title: user.title,
      subTitle: user.subTitle,
      data: user.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = banner;

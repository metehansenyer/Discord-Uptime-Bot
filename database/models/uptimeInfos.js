const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  owner: String,
  url: String
});

module.exports = mongoose.model("uptimeInfos", Schema);
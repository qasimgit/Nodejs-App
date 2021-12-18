const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: String,
  description: String,
  date: Date,
});

module.exports = mongoose.model("Posts", PostSchema);

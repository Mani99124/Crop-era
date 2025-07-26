const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema({
  crop: String,
  condition: String,
  action: String
});

module.exports = mongoose.model("Recommendation", recommendationSchema);
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  price: Number,
  image: String,
  crop: String,
  unit: String,
  description: String
});

module.exports = mongoose.model("Product", productSchema);
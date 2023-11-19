const mongoose = require("mongoose");

//define schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  available: Boolean,
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);

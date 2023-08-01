const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: { type: String, default: null },
  price: { type: Number, default: null },
  quantity: { type: Number, unique: true },
});

module.exports = model("product", productSchema);

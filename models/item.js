// item.js

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  price: { type: Number, required: true },
  number_in_stock: { type: Number, integer: true },
});

// Virtual for item's URL
ItemSchema.virtual("url").get(function () {
  // we don't use an arrow function as we'll need this object
  return `/catalog/item/${this._id}`;
});

// Export model
module.exports = mongoose.model("Item", ItemSchema);

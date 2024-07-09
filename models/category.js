// category.js

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
});

// Virtual for item's URL
CategorySchema.virtual("url").get(function () {
  // we don't use an arrow function as we'll need this object
  return `/catalog/category/${this._id}`;
});

// Export model
module.exports = mongoose.model("Category", CategorySchema);

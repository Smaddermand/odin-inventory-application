#! /usr/bin/env node

console.log(
  'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Item = require("./models/item");
const Category = require("./models/category");

const items = [];
const categories = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createItems();
  await createCategories();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// genre[0] will always be the Fantasy genre, regardless of the order
// in which the elements of promise.all's argument complete.
async function categoryCreate(index, name) {
  const category = new Category({ name: name });
  await category.save();
  categories[index] = category;
  console.log(`Added Category: ${name}`);
}

async function itemCreate(
  index,
  name,
  description,
  category,
  price,
  number_in_stock
) {
  const itemdetail = {
    name: name,
    description: description,
    category: category,
    price: price,
    number_in_stock: number_in_stock,
  };

  const item = new Item(itemdetail);
  await item.save();
  items[index] = item;
  console.log(`Added item: ${name}`);
}

// populate db by calling the typeofCreate function
async function createCategories() {
  console.log("Adding categories");
  await Promise.all([
    categoryCreate(0, "Egg Accessories"),
    categoryCreate(1, "Buttons"),
    categoryCreate(2, "Egg Cookers"),
  ]);
}

async function createItems() {
  console.log("Adding Items");
  await Promise.all([
    itemCreate(
      0,
      "Egg-o-matic",
      "Worlds best egg cooker",
      categories[2],
      200,
      4
    ),
    itemCreate(1, "Big Button", "Very big button", categories[1], 400, 35),
    itemCreate(2, "Big Button2", "Very big button x 2", categories[0], 800, 5),
    itemCreate(3, "Egg presser", "Pressing eggs", categories[1], 100, 10),
  ]);
}

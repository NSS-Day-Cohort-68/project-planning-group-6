const readline = require("readline-sync");

const items = [
  {
    id: 1,
    name: "screwdriver",
    quantity: 10,
  },
  {
    id: 2,
    name: "hammer",
    quantity: 5,
  },
  {
    id: 3,
    name: "saw",
    quantity: 2,
  },
  {
    id: 4,
    name: "lightbulb",
    quantity: 250,
  },
  {
    id: 5,
    name: "tape measure",
    quantity: 1,
  },
];

// get all items and display them
const displayItems = () => {
  console.log("All items:");
  for (const item of items) {
    console.log(`${item.id}: ${item.name}, Quantity: ${item.quantity}`);
  }
};

// add an item
const addItem = () => {
// Collect user input for the name 
  const productName = readline.question("Name: ");
  // Collect user input for the quantity
  const productQuantity = readline.question("Quantity: ");
// Create a new item from user's input data
// Add item to inventory list
}

// edit an item's details

// display low inventory items

module.exports = {
  displayItems, addItem
};

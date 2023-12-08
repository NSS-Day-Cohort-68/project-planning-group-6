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
const newItem = {
    id: newId(),
    name: productName,
    quantity: productQuantity,
}
// Add item to inventory list
items.push(newItem);

}
//create a function that creates a new id for an item
const newId = () => {
  //find the biggest id
  let biggestNumber = 0;
  for (let item of items) {
    if (item.id > biggestNumber) {
      biggestNumber = item.id
    }
  }
  // add 1 to it
  return biggestNumber + 1
// return the new number out of the function  
}
// edit an item's details
const editItem = () => {
  // display current inventory to the user
  displayItems()
  // collect input from the user about which item we want to edit
  const itemId = readline.question("what is the id of the item you want to edit: ");
  // what new name they want to give the user and what new quantity they want to use
  const productName = readline.question("Name: ");
  const productQuantity = readline.question("Quantity: ");
  // find the item in the array
  let foundItem;
  for(let item of items) {
if (item.id === parseInt(itemId)) {
   foundItem = item;
}

  }
  // take new values and change them so the item has the new values
}

// display low inventory items

module.exports = {
  displayItems, addItem
};

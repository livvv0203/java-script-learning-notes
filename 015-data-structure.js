"user strict";

/* Array destructure */
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your Pasta with ${ing1} ${ing2} ${ing3}`);
  },
};

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian

// swap in old way
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// swap in js trick
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0)); // Garlic Bread, Pizza

// destruct - receive two return values from the function
const [starter, mainDish] = restaurant.order(2, 0);
console.log(starter, mainDish);

// Nested array?
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

/* Destructuring Arrays */
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Give new variable name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Nested objects
const {
  fri: { open: o, close: cl },
} = openingHours;
console.log(o, cl);

// Spread
const arrTest = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arrTest];
console.log(newArr);

// Example
const newMenu = [...restaurant.mainMenu, "Gnocci"]; // expanding existing array and add another one
console.log(newMenu);

// Create shallow copies of arrays
const mainMenuCopy = [...restaurant.mainMenu];
// Join 2 Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, map, sets, but not objects
const str = "Olivia";
const letters = [...str, " ", "S. "];
console.log(letters);

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';











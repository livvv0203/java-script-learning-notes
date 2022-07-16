"user strict";

const rest = new Map();
rest.set("name", "Clissico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

// set something to a map
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open!")
  .set(false, "We are closed..");

console.log(rest.get("name"));
console.log(rest.get(true));

const time = 25; // 9pm
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); // not readable

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();

const question = new Map([
  ["question", "What is the best language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct!"],
  [false, "Try again!"],
]);

console.log(question);

// Convert Object to map
// const hoursMap = new Map(Object.entries(openingHOurs));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your answer: "));
// console.log(answer);

// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.value()]);

/* String methods */
console.log('--------Strings----------');

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);  
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('portugal')); // -1

console.log(airline.slice(4)); 
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(-2)); // al

console.log('Olivia'.padStart(10, '+').padEnd(20, '-'));

// Repeat
const message2 = 'Bad weather... All Departure Delayed...';
console.log(message2.repeat(5));

const planesInLine = function(n) {
    console.log(`There are ${n} planes in line ${' 🛫 Flight'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);




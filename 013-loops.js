for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights: ${rep}`);
}

const jieqingArray = [
  "Jieqing",
  "Scheme",
  2019 - 2021,
  "student",
  ["Mike", "Peter", "Steve"],
];

// Loop the Array
const types = [];

for (let i = 0; i < jieqingArray.length; i++) {
  console.log("content ----- " + jieqingArray[i]);
  // types[i] = typeof jieqingArray[i];
  types.push(typeof jieqingArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("--------ONlY STRINGS-------");

for (let i = 0; i < jieqingArray.length; i++) {
  if (typeof jieqingArray[i] !== "string") continue;
  console.log("content ----- " + jieqingArray[i]);
}

// Loop backward 
for (let i = jieqingArray.length - 1; i >= 0; i--) {
    console.log("Print Backward: " + i + " : " + jieqingArray[i]);
}

// Nested loop
for (let exercise = 1; exercise < 4; exercise++) {
    
    console.log(`----Starting Exercise ${exercise}----`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight ${rep}`);
    }
}

/* While Loop - use without the counter*/
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}
// Truncate(cut off) the dots and the digits to the right of it
let dice = Math.trunc(Math.random() * 6) + 1; // Random number from 1 - 6

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}















"use strict";

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true; // Wrong expression
if (hasDriversLicense) console.log("Let us Drive!");

/* Function */
function logger() {
  console.log("Username: Jieqing");
}

logger();
logger();
logger();

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcesser(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  // console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

const appleJuice = fruitProcesser(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcesser(2, 4);
console.log(appleOrangeJuice);

// To calculate age based on given age
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age_1 = calcAge1(1996);
console.log(age_1);

// Store function as a value
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age_2 = calcAge2(1991);
console.log(age_1, age_2);

// Arrow Function - easier and faster to write
const calcAge3 = (birthYear) => 2037 - birthYear;
const age_3 = calcAge3(1992);
console.log(age_3);

// Arrow Function - more para
const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 68 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearUntilRetirement(1998, "Jieqing"));
console.log(yearUntilRetirement(1996, "Bobber"));

/* Learning is not a linear process :) */











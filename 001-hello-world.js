/* Variables - Naming conventions */
let person = {
  name: "Olivia",
  age: 19,
  skill: "java",
};
console.log("Variable person is: ");
console.log(person);
console.log("---------------------");

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 12);
console.log(typeof 'Olivia');
console.log("---------------------");
// Dynamic typing
javascriptIsFun = 'YES!'; // Change the value from true to 'YES!'
console.log(typeof javascriptIsFun); // string
console.log("---------------------");

let year; // Empty value
console.log(year); // undefined
console.log(typeof year); // undefined

year = 1991;
console.log(year);
console.log(typeof null); // object
console.log("---------------------");

/* let - block scoped, var - function scoped, const */
console.log("Diff between var, let and const: ");

let age = 20;
age = 21; // Mutated the variable 

const birthYear = 1991; // Cannot be mutated - Immutable var

var job = 'programmer'; // Mutable
job = 'coder';
console.log("---------------------");

/* Operators */
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 to the pow of 3

const firstName = 'Jonas';
const lastName = 'Olivia';
console.log(firstName + ' ' + lastName);

// For Assignment, right to left
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y); 
const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);











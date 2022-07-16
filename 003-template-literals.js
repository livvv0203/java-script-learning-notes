const firstName = "Jieqing";
const job = "Software Developer";
const birthYear = 1993;
const year = 2027;

const jieqing =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jieqing);

/* Template Literals in ES6 - Use backticks: ` ` */
const jieqingNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jieqingNew);

/* Create Multiline Strings */
console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple


lines`);

/* Condition in Javascript */
const age = 12;

if (age >= 18) {
// For Mac, shortcut for emoji is: command + control + space
  console.log('Olivia can finally start to drive!🥰');
} else {
  const yearsLeft = 18 - age;
  console.log(`Olivia is too young. Wait for another ${yearsLeft} years.`);
}

const actualBirthYear = 2019;

let century;
if (actualBirthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
console.log("-----------------------");

/* Conversion and Coercion */

// type Conversion
const inputYear = '1993';
console.log(Number(inputYear), inputYear); // Return the String as a number
console.log(Number(inputYear), 18);

console.log(Number('Olivia')); // NaN
console.log(typeof NaN); // number, but invalid one

console.log(String(23), 23);

// type Coercion
console.log('I am ' + 23 + ' years old.'); // + triggers the coercion to strings
console.log('I am ' + String(23) + ' years old.');
console.log('23' + '10' + 3);
console.log('23' - '10' - 3); // - triggers the coercion to numbers
console.log('23' * '2'); 

let n = '1' + 1;
n = n - 1;
console.log(n); // 10
console.log(2 + 3 + 4 + '5'); // 95
console.log("-----------------------");

/* Falsy values : 0, '', undefined, null, NaN */
console.log(Boolean(0)); // false 
console.log(Boolean(undefined)); // false
console.log(Boolean('Olivia')); // Truthy
console.log(Boolean({})); // true
console.log(Boolean('')); // false

console.log('18' == 18); // true
console.log('18' === 18); // false

const favNumber = prompt("What's your fav number?");
console.log(favNumber);
console.log(typeof favNumber); // string

if (favNumber == 23) { // '23' == 23
  console.log('Amazing input.');
} else if (favNumber == 7) {
  console.log('7 is also a cool number.');
} else {
  console.log('Input is not 23 or 7.');
}

/* Boolean Logic: AND, NOT, OR*/
const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;
const isTired = true; // C
// console.log(hasDriverLicense && hasGoodVision || isTired);

if(shouldDrive && !isTired) {
  console.log('Girl is able to drive!');
} else {
  console.log('Someone else should drive.');
}















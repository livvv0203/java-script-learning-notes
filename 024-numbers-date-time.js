"user strict";

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z", // Z - utc
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

console.log(0.1 + 0.2 === 0.3); // false
console.log(+"23"); // Conversion - trick

// Parsing
console.log(Number.parseInt("30px"));
console.log(Number.parseInt("e23", 10));

console.log(Number.parseFloat("   2.5rem   ")); // 2.5
console.log(Number.isNaN(20));
console.log(Number.isNaN(23 / 0)); // Infinite
console.log(Number.isFinite(23 / 0)); // true

// sqrt
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2));

// Rounding decimals
console.log((2.7).toFixed(0)); // 3 String
console.log((2.7).toFixed(3)); // 2.700 String
console.log(+(2.345).toFixed(2)); // 2.35 Number

// Remainder Operation
console.log(5 % 2); // 2 * 2 + 1 -> 1
console.log(5 / 2); // 2.5
console.log(8 % 3); // 2

// EVEN OR ODD
console.log(6 % 2); // 0

const isEven = (n) => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(32));
console.log(isEven(513)); // false

// n % 3 === 0, for every three of the ele

// Numeric Separators - 287, 460, 000, 000
const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99; // price in cents
console.log(priceCents);

console.log(2 ** 53 - 1); // Edge - biggest
console.log(Number.MAX_SAFE_INTEGER);

// bigINT
console.log(28534567865456754565435454n);
// or
console.log(BigInt(28534567864));
console.log(20n === 20); // false
console.log(typeof 20n);

// Dates and Time
console.log("------- Date and Time -----");

// Create a Date
const now = new Date();
console.log(now);
console.log(new Date("December 24, 2015"));

console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 25, 23, 5));

console.log(new Date(0)); // Wed Dec 31 1969 16:00:00 GMT-0800 (Pacific Standard Time)

// Working with date
const future = new Date(2037, 10, 19, 25, 23, 5);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); // International standard

console.log(future.getTime()); // since 1970
console.log(new Date(2142321785000)); // Timestamp

// current timestamp
console.log(Date.now());
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));

console.log(days1 + " days."); // 10 days

// JS internationalize API

// setTimeout and timeInterval - milliseconds
// trigger and register the call back func to be count
const ingredients = ['olivies', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}!🍕`),
  3000,
  ...ingredients
); // fn + e - emoji
console.log("Waiting..."); 

if (ingredients.includes('spinach')) {
    clearTimeout(pizzaTimer);
}

// setInterval - such as every 5 seconds
setInterval(function() {
    const now = new Date();
    console.log(now);
}, 30000000);







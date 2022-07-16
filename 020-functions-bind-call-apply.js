"user strict";

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("BX747");
createBooking("BX747", 2, 800);
createBooking("LH123", undefined, 1000); // undefine to use the default para

const flight = "LH234";
const olivia = {
  name: "Olivia Jieqing",
  passport: 12345434,
};

const checkIn = function (flightNum, passenger) {
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 12345434) {
    // alert("Check in.");
  } else {
    // alert("Invalid passport");
  }
};

checkIn(flight, olivia);
console.log(flight);
console.log(olivia);

// function methods
const oneWord = function (str) {
  // Here, /search/g = to replace globally
  // g is a flag which means "global"
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord); // callback
transformer("JavaScript is the best!", oneWord);

const high5 = function () {
  console.log("⛱");
};

// addEventListener is the higher order function, while high5 is a callback function
document.body.addEventListener("click", high5);

["Olivia", "Marths", "Adam"].forEach(high5);

// Return a new function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
// Closures
const greeterHey = greet("Hey!");
greeterHey("Jieqing");
greeterHey("aaa");

// Call and Apply method
const americanAirline = {
  airline: "American Airline",
  iataCode: "AL",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

americanAirline.book(239, "Oli");
americanAirline.book(753, "Cislio");
console.log(americanAirline);

const alaskaAirline = {
  airline: "alaskaAirline",
  iataCode: "ALAS",
  bookings: [],
};

// Call Method
const book = americanAirline.book;
// book(23, 'Sarah Will'); - this is undefined
// Set this keyword to alaskaAirline
book.call(alaskaAirline, 23, "Sarah Williams"); // First argument of call method: what this is pointed to
console.log(alaskaAirline);

// Set this keyword to americanAirline obj
book.call(americanAirline, 222, "Mary Hooper");
console.log("AA Obj: ", americanAirline);

const swissAirline = {
  airline: "Swiss Airlines",
  iataCode: "SA",
  bookings: [],
};

book.call(swissAirline, 583, "Jackie Sa");
console.log(swissAirline);

// Apply method - second argument needs to be an array of data
const flightData = [343, "George Cooper"];
book.apply(swissAirline, flightData);
console.log(swissAirline);
// Same as :
book.call(swissAirline, ...flightData);

// Bind() - Manually set this keyword
const bookALAS = book.bind(alaskaAirline); // Set only with alaskaAirline
const bookAA = book.bind(alaskaAirline);
const bookSW = book.bind(swissAirline);

bookALAS(23, "Steven Williams");
// Parcial application
const bookALAS23 = book.bind(alaskaAirline, 45); // Setting first argument(FlightNum) to 23
bookALAS23("Jieqing Liu Official");
bookALAS23("Charlie");

// With Event Listeners
americanAirline.planes = 300; // Meaning company has 300 air planes

americanAirline.buyPlane = function () {
  console.log(this); // Button element?

  this.planes++;
  console.log(this.planes); // 301
  console.log(americanAirline);
};

// In an event handler function,
// this keyword always points to the element on which the handler attached to
// Bind() will return a new function here
// Bind() make 'this' keyword point to americanAirline
document
  .querySelector(".buy")
  .addEventListener("click", americanAirline.buyPlane.bind(americanAirline));

// Partial Application - can preset parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // set rate to 0.23
console.log(addVAT(100));
console.log(addVAT(23));

// change it to a function that return a function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

// Excercise - Poll
const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    // Get user input
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    this.displayResults();
    this.displayResults("string");

    // Register answers
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    // console.log(this.answers);
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

// poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

const runOnce = function () {
  console.log("Never run again!");
};
runOnce();

// Immidiately invoked function expression
(function () {
  console.log("This will never run again");
})();

/* Closures - internal property of a function */
console.log("--------- Closures ----------");
// secureBooking is th birthplace of the return function
const secureBooking = function () {
  let passengerCount = 0;
  
  // Create the booker function
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}
// A function always has access to the variable environment of the execution context
// in which it was created
const booker = secureBooking(); // This will return a new function - booker function

booker();
booker();
booker();

console.dir(booker);    

// More examples on closures
// Example 1
let f;

const g = function() {
    const a = 32;
    f = function() {
        console.log(a * 2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}

g(); // finished execution
f(); // able to access the a variable
console.dir(f); // Contains closure a
h();
f(); // reassigned by h()
console.dir(f); // Contains closure b

// Example 2: Timer
// n passengers, wait time 
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers.`);
        console.log(`There are 3 groups, each with ${perGroup} passengers.`);
    }, wait * 1000); // function will be executed after one sec

    console.log(`Will start boarding in ${wait} seconds.`);
};

const perGroup = 1000; // but closure has priorty over the scope chain
boardPassengers(180, 3);

// Another challenge
(function() {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    // Closure - callback can access header 
    // Birth place of the function, header is in the 'backpack'
    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue';
    });
})();












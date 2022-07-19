"user strict";

// Prototypes
// Objects in JS are linked to its prototype object

/* Constructor function */
// This function will produce an object for Person
const Person = function (firstName, birthYear) {
  // console.log(this);
  // Empty person obj
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // // Bad practice
  // this.calcAge = function() {
  //     console.log(2037 - this.birthYear);
  // }
};

// 1. Empty Person obj is created
// 2. Function is called, this = {}
// 3. {} - empty new obj is linked to prototype : __proto__
// 4. function automatically return {} - the obj
const olivia = new Person("Olivia", 1993); // call Person function
// console.log(olivia);

const jack = new Person("Jack", 1987); // an instance of Person
const melinda = new Person("Melinda", 1990);
// console.log(jack, melinda);
// console.log(olivia instanceof Person); // true

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype); // constructor + prototype

console.log(olivia.__proto__); // Prototype of olivia
console.log(olivia.__proto__ === Person.prototype); // true

console.log(olivia);

Person.prototype.species = "Homo Sapiens";
const arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype); // true

console.log("------- Car Example ---------");

// Car

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();

const EV = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

// Link the prototypes 
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
}

// class expression
const PersonCl = class {};

// class declaration - preferred
class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else alert(`${name} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }

  // methods - will be added to .prototype property
  calcAge() {
    console.log(2028 - this.birthYear);
  }
}

const jessica = new PersonClass("Jessica", 1996);
console.log(jessica);

jessica.calcAge();

// Another way with Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;

// Coding Challenge
class Car2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const toyota = new Car2('Toyota', 120);
console.log(toyota.speedUS);
toyota.accelerate();
toyota.accelerate();
toyota.brake();







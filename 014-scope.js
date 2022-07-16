"use strict";

// this
console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); // Undefined
};

calcAge(1993);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1993);
console.log("---------------");

// Function and Arrow Functino
// var firstName = "Mia";

const jieqing = {
  firstName: "Jieqing",
  year: 1993,
  calcAge: function () {
    console.log(this); // jieqing obj
    console.log(2027 - this.year);

    // Function inside of a function
    // Solution 1:
    const self = this; // self or that
    const isMillenial = function () {
      console.log(self); // undefined
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    // isMillenial();

    // Solution 2: Uses keyword from its parent scope - jieqing
    const isMillenial2 = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial2();
  },
  // Parent scope is the global scope
  greet: () => {
    console.log(this);
    console.log(`Hi ${this.firstName}`);
  },
}; // not a code block, but an object literal

jieqing.greet(); // Undefined - Arrow function does not get its own this keyword
// console.log(this.firstName); // Undefined

jieqing.calcAge();

// Primitive type and reference type
// Callstack
let age = 30;
let oldAge = age; // 30
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

// Reference type - Stored in heap
const me = {
    name: 'Jieqing',
    age: 30,
}

const friend = me;
friend.age = 27;

console.log('Friend: ', friend);
console.log('Me: ', me);

// In Practice
let lastName = 'Liu';
let oldLastName = lastName;
lastName = 'Dav';
console.log(lastName, oldLastName);

const olivia = {
    firstName: 'Olivia',
    lastName: 'Will',
    age: 27,
};

const educatedOlivia = olivia;
educatedOlivia.lastName = 'Dav';
console.log('Before educated: ', olivia);
console.log('After educated: ', educatedOlivia);





















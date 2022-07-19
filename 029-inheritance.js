"user strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  
  Person.call(this, firstName, birthYear);

  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};
// Linking prototypes
Student.prototype = Object.create(Person.prototype); // create the connection

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 1990, "Computer Science");
console.log(mike);
mike.introduce();
mike.calcAge();

// class Student extends Person {
//     constructor(fullName, birthYear, course) {
//         // always happen first 
//         super(fullName, birthYear);
//         this.course = course;
//     }
// }
















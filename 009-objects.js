// Array - ordered
const jieqingArray = [
  "Jieqing",
  "Scheme",
  2019 - 2021,
  "student",
  ["Mike", "Peter", "Steve"],
];

// Object - unstructure data
const jieqing = {
  firstName: "Jieqing", // Key-value pair
  lastName: "Liu",
  age: 2019 - 1993,
  job: "software dev",
  friends: ["Mike", "Peter", "Steve"],
};

// Retrieve data from object
console.log(jieqing);
// Using dot notation
console.log(jieqing.lastName);
// Another way
console.log(jieqing["lastName"]);

const nameKey = "Name";
console.log(jieqing["first" + nameKey]);
console.log(jieqing["last" + nameKey]);

const userInput = prompt(
  "What do you want to know about me? Choose from firstName, lastName, age, job and friends."
);

if (jieqing[userInput]) {
  console.log(jieqing[userInput]);
} else {
  console.log(
    "Wrong Request! Please choose from firstName, lastName, age, job and friends."
  );
}

jieqing.location = "Boston";
jieqing["twitter"] = "@livvvvvv";
console.log(jieqing);

// Challenge: Best friend of Jieqing
console.log(
  `${jieqing.firstName} has ${jieqing.friends.length} friends, and her best friend is called ${jieqing.friends[0]}.`
);

// Add functions to Obj
const jieqingNew = {
  firstName: "Jieqing", // Key-value pair
  lastName: "Liu",
  birthYear: 1993,
  job: "software dev",
  friends: ["Mike", "Peter", "Steve"],
  hasDriverLicense: false,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummany: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    } and she has ${this.hasDriverLicense ? "a" : "no"} driver licenses.`;
  },
};

console.log(jieqingNew.calcAge());
console.log(jieqingNew.age);

// Challenge : 'Jieqing is a 23 years old software developer, and he had a driver's license'
console.log(jieqingNew.getSummany());










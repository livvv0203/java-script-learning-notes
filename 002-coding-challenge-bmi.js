/*
Formula: 
BMI = mass / height ** 2 (mass in kg and height in meter)
*/
// Test Data 1:
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// Test Data 2:
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn; // Boolean

console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark!`);
}

/* II. Using object to store BMI data */

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.79,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log("Result is: " + mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
    `Opppsite result..`
} 

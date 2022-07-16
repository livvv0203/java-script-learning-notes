const day = "monday";

switch (day) {
  case "monday":
    console.log("Study data structure.");
    console.log("Change backlog.");
    break; // To stop executing
  case "tuesday":
    console.log("Prepare v-theory.");
    break;
  case "wednesday":
    console.log("...");
    break;
  case "thursday":
    console.log("Almost there.");
    break;
  case "friday":
    console.log("Record Video.");
    break;
  case "saturday":
    console.log("Enjoying weekends.");
    break;
  case "sunday":
    console.log("Weekend 2.0.");
    break;
  default:
    console.log("Not a valid day!");
}

/* Conditional Operator */
const age = 19;
age >= 21
  ? console.log("Let us drink wine.")
  : console.log("Water will be fine.");

const drink = age >= 18 ? "wind" : "water";
console.log(drink);

/* Tips Calculator */
const bill = 235;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
console.log("-------------------------------");

/* Tips Calculator - Using For Loop */
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // console.log(sum);
    return sum / arr.length;
}

// Test
console.log('Tips: ')
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));



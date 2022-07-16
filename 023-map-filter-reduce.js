"user strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/* Map Method */
const eurToUsd = 1.1;
const movementsUSD = movements.map((mov) => mov * eurToUsd);

console.log(movements); // Original is no mutated
console.log(movementsUSD);

const movementsUSDfor = []; // new array
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);
console.log(movementsUSDfor);

movementsDescriptions = movements.map((movement, i) => {
  if (movement > 0) {
    return `Movement ${i + 1}: You deposited ${movement}`;
  } else {
    return `Movement ${i + 1}: You withdraw ${Math.abs(movement)}`; // abs - absolute
  }
});

console.log(movementsDescriptions);

// Filter Method
const deposits = movements.filter(function (mov) {
  return mov > 0; // filter all deposit events
});

console.log(movements);
console.log(deposits);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals); // arrays with withdrawals events ele

// Reduce Method
console.log("------Reduce Method------", movements);
// acc - accumulator - like a 'snowball'
// cur - current value
const balance = movements.reduce(function (acc, cur, i, arr) {
    console.log(`Iteration ${i} : ${acc}`);
    return acc + cur;
}, 100); // second para - initial value of the accumulator

console.log(balance); // 3840

// Maximum value - acc to keep track of the current maximum value 
const max = movements.reduce((acc, mov) => {
    if (acc > mov) {
        return acc;
    } else {
        return mov;
    }
}, movements[0]);
console.log(max);

// flat and flat-map
// flat-map - only one level deep
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr);
console.log(arr.flat()); // only goes one level deep







"user strict";

const currencies = new Map([
  ["USD", "United States dollar"], // an entry of the map
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; // deposit and withdraw

/////////////////////////////////////////////////

/* Notes :  */
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`); // abs - absolute
  }
}
console.log("------Separator--------");
// To use For each loop - requires a callback function
// movement - current ele, i - current index, arr - array that is looped
// cannot use continue and break, has to finish looping arr
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`); // abs - absolute
  }
});

// For each working with sets and maps
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// Code practice
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(); // shallow copy
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    // at least 3 years old
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adault, and is ${dog} years old.`);
    } else {
      console.log(`Still a puppy..`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);











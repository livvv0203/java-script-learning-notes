const friend_1 = "Mike";
const friend_2 = "Steven";
const friend_3 = "Peter";

// Array is not primitive
const friends = ["Mike", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

friends[2] = "Jay";
console.log(friends);

const fam = ["firstName", "Olivia", 123, "someone", friends];
console.log(fam);

// Array Methods
friends.push("Alina");
friends.unshift("firstGuy");
console.log(friends);
friends.pop(); // Last one
const popped = friends.pop();
console.log(friends);
console.log(friends.indexOf("Mike"));

console.log(friends.includes("Mike"));

/* Tips Calculator II */
console.log("-----------Tips Calculators-----------");
const calcTip = function (bill) {
  return bill >= 500 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

// Array with the sums and tips
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

// Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd'] - index 4 is not included 
console.log(arr.slice(-2)); // last two elements of the array
console.log(arr.slice(-1));
console.log(arr.slice(1, -2)); // from first one and extract everything except the last 2
// Create a shallow copy
console.log(arr.slice());
// or
console.log([...arr]);

// Splice
console.log(arr.splice(2)); // the original arr loses the part which is extracted 
console.log(arr);

// Concat
const letters = arr.concat([1,2,3,4,5,6]);
console.log(letters);
// Same as :  
console.log([...arr, ...letters]);

console.log(letters.join(' - '));

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr.at(0));
// Getting the last ele
console.log(arr3.slice(-1)[0]);
console.log(arr.at(-1));

console.log(arr.at(-2)); // 11






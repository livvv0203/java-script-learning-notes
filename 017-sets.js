'user strict';

// Set has to be unique
const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza'
]);

console.log(ordersSet);
console.log(new Set('Olivia'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.delete('Pasta'));
// No way of getting values out of a set , no index
// Only matters if a value inside the set or not 
console.log(ordersSet.clear());

// Sets are Iterables 
for (const order of ordersSet) console.log(order);

// Example 
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

// Convert a set to an array
const newStaffUnique = [...new Set(staff)];
console.log(newStaffUnique);

















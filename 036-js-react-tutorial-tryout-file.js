class Human {
    constructor() {
        this.gender = 'Male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = 'Max';
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();

const arr = [1,2,3,4,5];
console.log(arr); 

for (var i = 0; i < arr.length; i++) {
    console.log(`Iteration ${i + 1}: ${arr[i]}`);
}

const newArr = [...arr, 10, 20];
console.log(newArr);

newArr.forEach(e => {
    console.log(`Element content is: ${e}`);
});

// Spread
const p = {
    name: 'Jieqing'
}

const pNew = {
    ...p,
    age: 20
}

console.log(pNew);

// Rest - Merge the operator in to an array
const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));

// Destructuring
[a, b] = ['Hello', 'Jieqing'];
console.log(a);
console.log(b);

// Practice
const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3);

// array function - map
const arr1 = [1, 2, 3];
const arr1Double = arr1.map((el) => {
    return el * 2;
});

console.log(arr1Double);








function addUp() {
    let total = 0;
    for (let i = 1; i < 10000; i++) {
        total = total + 1;
    }
    return total;
}

let t = performance.now();
console.log(t);
addUp();
let t2 = performance.now();
console.log(t2);





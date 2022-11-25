// Recursion - countDown Recursively
function countDownRecur(num) {
  if (num <= 0) {
    console.log("Finished!");
    return;
  } else {
    console.log(num);
    num--;
    countDownRecur(num);
  }
}

// countDownRecur(10);

// Iteratively
function countDownIteratively(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("Done!");
}

// countDownIteratively(5);

// 2nd Recursion function
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// Factorial
// 4 * 3 * 2 * 1
function fac(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total = total * i;
  }
  console.log(total);
  return total;
}

// fac(6);
// Recursively - Fac
function facRecur(num) {
  if (num === 1) return 1;

  return num * facRecur(num - 1);
}

const result = facRecur(6);
console.log(result);

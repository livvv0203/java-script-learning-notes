"user strict";

/* Synchronous Code - executed line by line */

/* 
Asynchronous 
- executed after a task that runs 'in the background' finishes  
- non-blocking  
- not happening at the same time 
- img.src // this is asynchronous
*/

// AJAX - Async JS And XML

// Build a promise - with one argument: the execution function
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lotter draw is happening here: ");

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You WIN!!!"); // fulfilled promise
    } else {
      reject(new Error("You Lose!!!"));
    }
  }, 2000);
});

lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log("1 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("2 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("3 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("4 second passed");
    return wait(1);
  })
  .then(() => console.log("5 seconds passed"));

Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("Problem!")).catch((x) => console.err(x));

////////////////////////////////////////////////////
// Promisifying the geolocation API
// navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err = console.log(err)
// );

// Then, promisify this
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));










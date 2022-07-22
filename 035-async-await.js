"user strict";

/* async function - inside can have one or more await */
// Not blocking the main thread
// async behind the scene
// syntax sugar:)
const whereAmI = async function (country) {
  // wait until the promise is fulfilled
  const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  console.log(res);

  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};

whereAmI("portugal"); // sync function
console.log("FIRST");

// try catch statement
try {
  let y = 1;
  const x = 2;
  x = 3; // error
} catch (e) {
  // alert(err.message);
}

const createWait = (function (sec) {
  new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Waiting...");
    }, 1000 * sec);
  });
})(
  // Promise.all() - run at same time

  // Promise.race
  async function () {
    const res = await Promise.race([
      // Several promises here
      // will take the fastest one, only get one result
    ]);
  }
);

const timeout = function (sec) {
  new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long.."));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`https://xxxxxxx`), timeout(5)])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err));

Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Fail"),
  Promise.resolve("One more Success"),
]).then((res) => console.log(res));







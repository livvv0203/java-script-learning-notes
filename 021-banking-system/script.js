"use strict";

/////////////////////////////////////////////////
// BANK SYSTEM APP

// Data
const account1 = {
  owner: "Jieqing Liu",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z", // Z - utc
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2022-07-10T17:01:17.194Z",
    "2022-07-13T23:36:17.929Z",
    "2022-07-14T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "en-US", // de-DE zh-ZH
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "zh-ZH",
};

const accounts = [account1, account2];

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sam Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Functions
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayPassed = calcDaysPassed(new Date(), date);

  if (dayPassed === 0) return "Today";
  if (dayPassed === 1) return "Yesterday";
  if (dayPassed <= 7) return `${dayPassed} days ago`;
  else {
    // Using Intel API
    return new Intl.DateTimeFormat(locale).format(date);

    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();

    // return `${day}/${month}/${year}`;
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  console.log(acc);
  console.log(acc.movements); // []

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    // mov - current element in the arr that are looping over

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html); // position and string containing the html
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  // Calculate Interest Rate
  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

// To receive all the accounts - to do a side effect - no value return
const createUsernames = function (accs) {
  // Looping arrya username, take the first letter, then putting them together
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

const startLogOutTimer = function() {

  const tick = function() {

    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, printing the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // Hit 0 second, stop timer and log out user 
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started.';
      containerApp.style.opacity = 0;
    }
    // Decrease 1 second 
    time--;
    console.log(time);
  };
  // Set time to 5 mintutes? 10 sec?
  let time = 300; 
  // console.log(time); // 100
  
  // Call the timer every second 
  tick(); // Gets called immediately
  // console.log(time); // 99
  const timer = setInterval(tick, 1000);
  
  return timer; // for stop the timer
}

createUsernames(accounts); // stw
// Calling all methods at once
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Event Handler - button in form ele
let currentAccount, timer;
let timeoutTimer;

// MAKE IT ALWAYS LOGGIN IN - on dev purpose
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
timeoutTimer=startLogOutTimer();

window.addEventListener('beforeunload', event => {
  console.log('Before unload...');
  console.log(timeoutTimer);
  clearInterval(timer);
  console.log('Timer: ',timer)
});

btnLogin.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Find the account which user inputted
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and the welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`; // 'Jieqing'

    containerApp.style.opacity = 100;

    // Create current DATE and TIME
    // Experiencing API
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "long", // 2-digit
      year: "numeric",
      weekday: "long",
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now); // pass the local string

    // const now = new Date(); // current date
    // const day = `${now.getDate()}`.padStart(2, 0); // length 2, fill in 0 from start
    // const month = `${now.getMonth() + 1}`.padStart(2, 0); // this one is zero based
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Timer
    if(timer) clearInterval(timer); // Timer already exists for a prev user
    timer = startLogOutTimer();
    // update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {

  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  // Clear input box
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log("Transfering...");
    // Executing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add Transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // update UI
    updateUI(currentAccount);

    // Reset timer 
    clearInterval(timer);
    timer = startLogOutTimer(); // active user 
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add Loan Date
      currentAccount.movementsDates.push(new Date().toISOString());

      updateUI(currentAccount);

      // Reset Timer - active using 
      clearInterval(timer);
      timer = startLogOutTimer();

    }, 2500);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // Delete the current account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

// Sorting state
let sorted = false;

btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// EVERY
console.log(account2.movements.every((mov) => mov > 0)); // true

// Separate Callback
const deposit = (mov) => mov > 0; // save the simple call back func
console.log(account1.movements.some(deposit));
console.log(account1.movements.every(deposit));
console.log(account1.movements.filter(deposit));

// Sorting
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());

console.log(account1.movements.sort());
// Sorting ascending
const m = account1.movements.sort((a, b) => {
  if (a > b) return 1; // SWAP
  if (b > a) return -1; // KEEP ORDER
});
// OR:
const m2 = account1.movements.sort((a, b) => a - b);

console.log(m);

// Descending
const m1 = account1.movements.sort((a, b) => {
  if (a > b) return -1; // SWAP
  if (b > a) return 1; // KEEP ORDER
});

console.log(m1);

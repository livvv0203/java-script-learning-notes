"user strict";

// Banking system refactor in ES6 class
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = []; // protected property
    this.locale = navigator.language;

    console.log(`Welcome, ${owner}!`);
  }

  // Public Interface
  getMovement() {
    return this._movements;
  }

  deposit(value) {
    this._movements.push(value);
    return this; // make the method chainable
  }

  withdraw(value) {
    this._movements.push(-value);
  }
  // Internally by the bank
  _approveLoan(value) {
    return true;
  }

  requestLoan(value) {
    if (this.approveLoan(value)) {
      this.deposit(value);
      console.log("You loan has been approved!");
    }
  }
}

const acc1 = new Account('Olivia', 'USD', 1111);

acc1.deposit(250);
acc1.withdraw(100);
acc1.requestLoan(400);
console.log(acc1.getMovement());

console.log(acc1);
console.log(acc1.pin);

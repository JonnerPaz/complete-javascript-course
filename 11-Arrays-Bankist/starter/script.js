'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

function displayMovements(movements) {
  // Empty movements box
  containerMovements.innerHTML = '';

  // Each movement in movements arr will be prepared and inserted to the html
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
       <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
      </div>
`;
    // Insert to html
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
console.log(displayMovements(account1.movements));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];
const arrtic = [...arr].reverse(); // Shallow copy of arr.reverse
const arrSliced = arr.slice(0, 2); // a, b (c is also removed)
const arrConcat = arr.concat(arrtic);
/* console.log(arr.slice(-1)); // e */
/* console.log(arr.splice(3)); // Modify original array */
/* console.log(arr.reverse()); // Mutate method. */

// Foreach method
// In forEarch method continue and break statements are not supported, while in for-of does
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// calling index on for-of loops
/* for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Action ${i}: you deposited ${movement} dollars`);
  } else {
    console.log(`Action ${i} you withdrew ${Math.abs(movement)} dollars`);
  }
} */

/* movements.forEach((movement, i) =>
  console.log(
    `Action ${i}: You ${movement > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      movement
    )} dollars`
  )
); */

// forEarch with maps and sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// On sets, value and key have exactly the same value, so we use '_' to specify that we don't need that argument
const currenciesUnique = new Set(['USD', 'GPB', 'EUR', 'EUR', 'USD']);
currenciesUnique.forEach((value, _, map) => {
  console.log(`${_}: ${value}`);
});

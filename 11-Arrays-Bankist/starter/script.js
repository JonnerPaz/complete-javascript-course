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
// displayMovements(account1.movements);

function calcAndDisplayBalance(movements) {
  const balance = movements.reduce((acc, current) => acc + current, 0);
  labelBalance.textContent = balance;
}

function calcDisplaySummary(movements, arr) {
  const incomes = movements
    .filter(item => item > 0)
    .reduce((acc, current) => acc + current);
  labelSumIn.textContent = `${incomes}💶`;

  const outcomes = movements
    .filter(item => item < 0)
    .reduce((acc, current) => acc + current);
  labelSumOut.textContent = `${Math.abs(outcomes)}💶`;

  const interest = movements
    .filter(el => el > 0)
    .map(deposit => (deposit * arr.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, current) => acc + current, 0);
  labelSumInterest.textContent = `${interest}`;
}
// console.log(calcDisplaySummary(account2.movements, account2));

function createUsername(user) {
  user.forEach(userAcc => {
    userAcc.username = userAcc.owner
      .toLowerCase()
      .split(' ')
      .map(el => el[0])
      .join('');
  });
}

createUsername(accounts);
// this returns 'undefined' if we log it because we're not returning anything.
// console.log(createUsername(accounts));

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    el => el.username === inputLoginUsername.value.toString().trim()
  );

  // Without optinal '?.' this will throw an error when input non-existent fields
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = '100';
    // Display Movements
    displayMovements(currentAccount.movements);
    // Display Balance
    calcAndDisplayBalance(currentAccount.movements);
    // Display Summary
    calcDisplaySummary(currentAccount.movements, currentAccount);
    // Leave empty login field. This works because of order of operations, which this time starts from the right
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
  } else {
    console.error('fuck');
  }
});

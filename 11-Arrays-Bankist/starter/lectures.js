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
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
const forEachMap = currencies.forEach((value, key, map) => {
  // console.log(`${key}: ${value}`);
});

// On sets, value and key have exactly the same value, so we use '_' to specify that we don't need that argument
const currenciesUnique = new Set(['USD', 'GPB', 'EUR', 'EUR', 'USD']);
const forEachSet = currenciesUnique.forEach((value, _, map) => {
  // console.log(`${_}: ${value}`);
});

// Map method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;
const movementsUsd = movements.map((mov, i) => mov * euroToUsd);

// for-of equivalent to map method
const movementsUsdFor = [];
for (const mov of movements) {
  movementsUsdFor.push(mov * euroToUsd);
}

const movementsDescriptions = movements.map((mov, i, arr) => {
  return `Action ${i}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
    mov
  )} dollars`;
});

// filter method
const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);

// for-of equivalent to filter
const depositsFor = [];
for (const deposit of deposits) {
  if (deposit > 0) depositsFor.push(deposit);
}

// Reduce method
// Boil down all elements of an array into one single value
// accumulator = snowball
const balance = movements.reduce(
  (accumulator, current_element) => accumulator + current_element,
  0
);

// for-of equivalent of reduce
let balancefor = 0;
for (let mov of movements) balancefor += mov;

const maxValue = movements.reduce(
  (acc, current) => (acc > current ? acc : current),
  movements[0]
);
// console.log(maxValue);

// chaining arr methods

const totalDepositsUsd = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, current) => acc + current);

// find method

// movements.find(mov => mov < 0);
const ownership = movements.find(owner => owner.owner === 'Jessica Davis');

// some and every methods

// Only evaluates equality
movements.includes(-130);
movements.some(el => el === -130); // Same as above

// With SOME you can add a condition
const anyDeposit = movements.some(mov => mov > 90);

// Every pass that condition to every element of the array, and return true or false
movements.every(el => el > 0); // false
// account4.movements.every(el => el > 0); // True

// Flat and flatmap

const flatarr = [[[1, 2]], 3, [4, [5, 6]], 7, 8, 9];
flatarr.flat(); // [[1, 2], 3, 4, [5, 6], 7, 8, 9]
flatarr.flat(2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// flat
const overallBalance = movements
  .map(el => el.movements)
  .flat()
  .reduce((acc, current) => acc + current, 0);

// flatmap
const overallBalance2 = movements
  .flatMap(el => el.movements)
  .reduce((acc, current) => acc + current, 0);

// Sort

// result < 0 = keeps order
// result > 0 = switch order

const sorty = movements.sort((a, b) => a - b);
console.log(movements.sort((a, b) => (a > b ? 1 : -1))); // Same result as above

// More array methods

// fill method is a mutable method
const x = new Array(7); // 7 empty spaces of an array
x.fill(1, 3, 5);
// x.fill(1);
//console.log(x);
const arri = [1, 2, 3, 4, 5, 6];
arri.fill(26, 2, 5);
// console.log(arri);

// Array.from
const y = Array.from({ length: 8 }, () => 2);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
// 100 roll dices
const rareRoll = Array.from({ length: 100 }, () =>
  Math.trunc(Math.random() * 6 + 1)
);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});

const allDeposits = accounts
  .flatMap(el => el.movements)
  .filter(el => el > 0)
  .reduce((acc, current) => acc + current, 0);
// console.log(allDeposits);

const deposits1000 = accounts
  .flatMap(el => el.movements)
  .filter(el => el >= 1000).length;

const deposits1111 = accounts
  .flatMap(el => el.movements)
  // if current is >= 1000 it adds to acc (which is 0) every time condition is true
  .reduce((acc, current) => (current >= 1000 ? ++acc : acc), 0);

const { depo: indi, withd: mandi } = accounts
  .flatMap(el => el.movements)
  .reduce(
    (acc, current) => {
      acc[current > 0 ? 'depo' : 'withd'] += current;
      return acc;
    },
    { depo: 0, withd: 0 }
  );
console.log(indi, mandi);

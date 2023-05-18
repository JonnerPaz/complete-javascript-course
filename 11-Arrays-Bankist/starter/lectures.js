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

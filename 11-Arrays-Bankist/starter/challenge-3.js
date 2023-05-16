'use strict';

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageSimplified = el =>
  el
    .map(dog => (dog <= 2 ? dog * 2 : (dog = 16 + dog * 4)))
    .filter(el => el >= 18)
    .reduce((acc, current, i, arr) => acc + current / arr.length, 0);

// console.log(calcAverageSimplified([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageSimplified([16, 6, 10, 5, 6, 1, 4]));

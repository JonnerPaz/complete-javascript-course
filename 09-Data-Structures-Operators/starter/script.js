'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Working with strings

const airline = 'TAP air portugal';
airline.slice(4, 7); // air
// lastIndexOf requires a word to search
// console.log(airline.lastIndexOf('i')); // 5 = air
// console.log(airline.lastIndexOf('air')); // 4

// console.log(airline.slice(0, airline.indexOf(' '))); // TAP
// console.log(airline.slice(0, airline.lastIndexOf(' '))); // TAP air
// console.log(airline.slice(1, -1));

function checkMiddleSeat(word) {
  const seat = word.slice(-1);
  if (seat === 'B' || seat === 'E') {
    console.log('Is a middle seat');
  } else {
    console.log('Is NOT a middle seat');
  }
}
checkMiddleSeat('43B');
checkMiddleSeat('43A');
checkMiddleSeat('43D');
// Maps. Can have any type of key
const rest = new Map();
rest
  .set('name', 'Gorilla')
  .set('age', 20)
  .set('gender', 'Masculine')
  .set(5, 'fire');
rest.set(true, 'wanna have sex');

const time = 21;

rest.has('gender');
rest.delete('gender');
// console.log(rest.get(time > rest.get('age'))); // True = wanna have sex
// Sets

// Is important to pass an iterable
// Is case sensitive. Pizza !== pizza
const orderSet = new Set([
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
]);

// console.log(new Set('Jonner').size); // 5
// console.log(orderSet.size); // 3
// console.log(orderSet.has('Pizza')); // true
// console.log(orderSet.has('pizza')); // false: Remember, case-sensitive
orderSet.add('cheeze');
orderSet.delete('cheeze');
// console.log(orderSet.has('Pizza')); // true
// orderSet.clear(); // to eliminate all elements of a set

for (const i of orderSet) console.log(i);

const kitchen = ['waiter', 'cheff', 'cheff', 'waiter', 'manager'];
const kitnew = [...new Set(kitchen)];
console.log(kitnew);
// console.log(kitnew);
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// nullish assigment operator

const dude = '' || 'holi'; // holi
const dudi = '' ?? 'holi'; // ''

// spread operator: goes ON THE RIGHT side of the equal sign

const ristoranteCat = { ...restaurant };

// Rest operator: goes on the LEFT side of the equal sign
// c = [3, 4, 5]
const [a, b, ...c] = [1, 2, 3, 4, 5];

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

const { sat, ...otherDays } = restaurant.openingHours;

function add(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

function nameChanger(str) {
  return [...str];
}
// console.log(`${nameChanger('Jonner').join(' ')}`);
/*
// destructuring objects
const { name, openingHours, categories } = restaurant;
console.log('EXAMPLE 1', name, openingHours, categories);

// Same as above but with given each property a name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log('EXAMPLE 2', restaurantName, hours, tags);

// Adding default values to destructured objects
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log('EXAMPLE 3', menu, starters);

// Mutating objects data
let a = 1;
let b = 1;
console.log(a, b);
const obj = {
  a: 2,
  b: 2,
  c: 5,
};

// parenthesis are important when changing destructured let values
({ a, b } = obj);
console.log(a, b);

// Nested objects
let {
  fri: { open: op, close: clo },
  sat: { open: opened, close: closed },
} = openingHours;
console.log(op, clo, opened, closed);


// Destructuring arrays
const arr = [2, 3, 4];
const [a, b, c] = arr;
console.log(arr, 'Destructuring ->', a, b, c);

// skipping items of the object with ','
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Reversing destructuring, switching variable values
[secondary, main] = [main, secondary];

// destructuring the result of a function
const [starter, mainCourse] = restaurant.order(0, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
const [first, , second] = nested;
const [j, , [k, g]] = nested;
console.log(first, second);
console.log(j, k, g);

// default values
const [q = 1, o = 1, r = 1] = [8, 9];
console.log(q, o, r);
*/

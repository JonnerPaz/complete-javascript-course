'use strict';

// constructor Functions

const Person = function (nameSpace, age) {
  (this.nameSpace = nameSpace), (this.age = age);

  // Never create a method inside of a constructor
  /* this.calcAge = function () {
    console.log(2023 - this.age);
  }; */
};

// New {} i created
// function is called, this = {}
// {} Linked to prototype
// function automatically return {}
const jonner = new Person('Jonner', 20);

// Determine what is instanciated
// console.log(jonner instanceof Person) // true
console.log(jonner.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(jonner)); // true

// prototypes

// Asigning methods in constructor
Person.prototype.calcAge = function () {
  console.log(2023 - this.age);
};
Person.prototype.species = 'human'; // Adding attributes to the class
// console.log(jonner.hasOwnProperty('nameSpace')); // true
// console.log(jonner.hasOwnProperty('species'));  // false, it is inside the __proto__ object
// console.log(Person.prototype);

// const arr = [1, 2, 3];
/* console.log(arr.__proto__);
console.log(typeof arr.__proto__); // Object XD */

const h1 = document.querySelector('h1');

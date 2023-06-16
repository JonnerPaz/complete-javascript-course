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

// ES6 Classes

class PersonCL {
  constructor(fullName, birthyear) {
    this.firstName = fullName;
    this.birthyear = birthyear;
  }

  // with this syntactic sugar, you can add method in classes, NOT in constructors
  calcAge() {
    console.log(2037 - this.birthyear);
  }

  get age() {
    return 2037 - this.birthyear;
  }

  set fullName(nameSpace) {
    if (nameSpace.includes(' ')) this._fullName = nameSpace;
    else alert(`${nameSpace} does not include full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCL('Jessica', 2002);

// getters and setters: Accessor properties
const account = {
  owner: 'Jonner',
  movements: [120, 22, 159, 472, 556],

  // getters starts with get keyword
  get latest() {
    return this.movements.at(-1);
  },

  // setters starts with set keyword
  set latest(el) {
    return this.movements.push(el);
  },
};

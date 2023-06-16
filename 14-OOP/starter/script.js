'use strict';

// constructor Functions

const Person = function (nameSpace, age) {
  (this.nameSpace = nameSpace), (this.age = age);

  // Never create a method inside of a constructor function
  /* this.calcAge = function () {
    console.log(2023 - this.age);
  }; */
};

// Static method with functions
Person.hey = function () {
  console.log('hey there!');
};

// New {} i created
// function is called, this = {}
// {} Linked to prototype
// function automatically return {}
const jonner = new Person('Jonner', 20);

// Determine what is instanciated
jonner instanceof Person; // true

// prototypes

// Asigning methods in constructor
Person.prototype.calcAge = function () {
  console.log(2023 - this.age);
};

Person.prototype.species = 'human'; // Adding attributes to the class
// console.log(jonner.hasOwnProperty('nameSpace')); // true
// console.log(jonner.hasOwnProperty('species'));  // false, it is inside the __proto__ object
// console.log(Person.prototype);

// ES6 Classes

class PersonCL {
  constructor(fullName, birthyear) {
    this.firstName = fullName;
    this.birthyear = birthyear;
  }

  // Instance Methods. Will point to .prototype property
  // with this syntactic sugar, you can add method in classes, NOT in constructors
  calcAge() {
    console.log(2037 - this.birthyear);
  }

  // getters and setters: Accessor properties
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

  // Static method on ES6 classes. It will NOT be added to .prototype property
  static hey() {
    console.log('hey there!');
  }
}

const jessica = new PersonCL('Jessica', 2002);

// Creating Objects with Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthyear);
  },
};
const steven = Object.create(PersonProto);

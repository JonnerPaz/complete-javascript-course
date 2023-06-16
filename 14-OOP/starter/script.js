'use strict';

// constructor Functions

const Person = function (firstName, age) {
  this.nameSpace = firstName;
  this.age = age;

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
    this.fullName = fullName;
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

const jessica = new PersonCL('Jessica Davis', 2002);

// Creating Objects with Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthyear);
  },

  init(firstName, birthyear) {
    this.firstName = firstName;
    this.birthyear = birthyear;
  },
};
const steven = Object.create(PersonProto);

// Inheritance with functions
const Student = function (firstName, birthyear, course) {
  Person.call(this, firstName, birthyear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype); // Setting manually __proto__
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`Hello! my name is ${this.firstName} and I'm ${this.birthyear}`);
};

// Inheritance with ES6 Classes

class StudentCL extends PersonCL {
  // If you don't need any new properties, you can omit constructor function
  constructor(fullName, birthyear, course) {
    super(fullName, birthyear); // construction function of parent class. This must be first
    this.course = course;
  }

  calcAge() {
    2022 - this.birthyear;
  }
}

const martha = new StudentCL('Martha m', 2012, 'Psychology');

// Inheritance with Object.create

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthyear, course) {
  PersonProto.init.call(this, firstName, birthyear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
/* jay.init('jay', 2002, 'computer science');
jay.introduce();
jay.calcAge(); */

class Account {
  // Public fields (going right into the instances)
  // This are exactly equal on all instances
  locale = navigator.language;

  // Private fields (instances)
  // All equal on all instances
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // You can add more properties than the ones you pass in the arguments
    // this.#movements = [];
    // this.locale = navigator.language;
  }

  // Private interface
  #approveLoan() {
    return true;
  }

  // Public interface
  deposit(mov) {
    this.#movements.push(mov);
    return this;
  }

  get getmovements() {
    return this.#movements;
  }

  withdrawal(mov) {
    this.deposit(-mov);
    return this;
  }

  requestLoan(mov) {
    if (this.#approveLoan(mov)) {
      this.deposit(mov);
      console.log(`Loan approved!`);
      return this;
    }
  }
}

const acc1 = new Account('Jonner', 'USD', 2977);
acc1.deposit(120);
acc1.withdrawal(500);

// Chaining methods
// We must return something to make this. Returning 'this is a good idea'
acc1
  .deposit(300)
  .deposit(33000)
  .deposit(30)
  .deposit(4)
  .requestLoan(200)
  .withdrawal(10);

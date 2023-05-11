'use strict';
// function that leturns another function

function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

// const foo = greet('hey');
// call function, now with foo reserved params

/* foo('Jonner'); // 'Hey Jonner'
foo('Titan'); // 'Hey Titan' */

// call function itself
/* greet('hola', 'tonto');
greet('hello')('Jonas'); // Hello Jonas */

const greet2 = greeting => name => console.log(`${greeting} ${name}`);
greet2('hola', 'tonto');

// Call and Apply methods
// These allows you to manipulate the 'this' context explicity

const luke = {
  name: 'luke',
  userName: 'kidnapper007',
  courses: [],

  rewrite(...cursitos /* este empaqueta */) {
    this.courses.push(...cursitos); // This one desempaqueta Xd the arg
    const plural = this.courses.length > 1 ? `s` : '';
    console.log(
      `${this.name} hizo un total de ${
        this.courses.length
      } curso${plural}. Su cursos completados son ${cursitos
        .slice(0, -1)
        .join(', ')} y ${cursitos.at(-1)}`
    );
  },
};

/* luke.rewrite('pamper', null);
console.log(luke.courses); */

// Using call method
const insertCourse = luke.rewrite;

const marry = {
  name: 'Marry',
  userName: 'Anita4514',
  courses: [],
};

// Doing this you explicity say what is the 'this' keyword
insertCourse.call(marry, 'pamper', 'kik', 'toi'); // 'pamper'
console.log(marry);

const ivan = {
  name: 'Ivan',
  userName: 'Ivan2008',
  courses: [],
};

// Apply method: not so often used. Better start using call instead
const toInsert = `Curso de HTML, Curso de CSS, Curso de JS`;
insertCourse.apply(ivan, toInsert.split(', '));
// console.log(...toInsert);
console.log(ivan);

// Bind method
// Call & Apply calls a function. Bind returns a function. Keep in mind that

const ortega = {
  name: 'Ortega',
  userName: 'Orejon1314',
  courses: [],
};

const newInsertCourse = insertCourse.bind(ortega);
newInsertCourse('Curso de SQL', 'Curso de CSS');
console.log(ortega);

const addTax = (rate, value) => value * rate;
console.log(addTax(0.1, 100));

// Doing this we'll omit this context and just set other arguments
const taxPortugal = addTax.bind(null, 0.33);
console.log(taxPortugal(100));

// same as doing bind method, IMPORTANT
// const taxPortugal2 = value => rate => value * rate;
const taxRate = function (rate) {
  return function (value) {
    return value * rate;
  };
};

const taxRater = taxRate(0.5);
console.log(taxRater(100));

// immediately invoked function expresion
// (() => console.log('I am FAMouS'))();
(function () {
  console.log('Yikes!');
})();

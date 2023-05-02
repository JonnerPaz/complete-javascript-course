'use strict';
// function that leturns another function

function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const foo = greet('hey');
// call function, now with foo reserved params

foo('Jonner'); // 'Hey Jonner'
foo('Titan'); // 'Hey Titan'

// call function itself
greet('hola', 'tonto');
greet('hello')('Jonas'); // Hello Jonas

const greet2 = greeting => name => console.log(`${greeting} ${name}`);
greet2('hola', 'tonto');

// Call and Apply methods
// These allows you to manipulate the 'this' context explicity

const luke = {
  name: 'luke',
  userName: 'kidnapper007',
  courses: [],
  rewrite(course, ...moreCourses) {
    return this.courses.push([course, ...moreCourses]);
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
insertCourse.call(marry, 'pamper'); // 'pamper'
console.log(marry.courses);

// Apply method: not so often used. Better start using call instead
const toInsert = ['pop', 'go', 'f*k'];
insertCourse.apply(marry, toInsert);
console.log(marry);

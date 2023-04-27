// Remember, we're gonna use strict mode in all scripts now!
'use strict';

function measureKelvin() {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // value: Number(prompt('Degree Celcius:')),
  };
  //   console.table(measurement)
  const kelvin = measurement.value + 273;
  return kelvin;
}
console.log(measureKelvin());
console.log('This is a log');
console.warn('This is a warn');
console.error('this is an error');

// Challenge

// ... 17C in 1 days ... 23C in 2 days ... 25C in 3 days ...

// before concatenate data, sort them
// concatenate strings with values

function printForeCast(arr) {
  // Sorting array
  const sortedArr = arr.sort((a, b) => a - b);
  let output = '';
  for (let i = 0; i < sortedArr.length; i++) {
    // concatenating strings
    output += `... ${sortedArr[i]}°C in ${i + 1} days `;
  }
  return output;
}

console.log(printForeCast([12, 14, 11]));
console.log(printForeCast([12, 5, -5, 0, 4]));

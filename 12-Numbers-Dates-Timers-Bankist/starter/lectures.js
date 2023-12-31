// Lectures

// remainder operator

/* console.log(5 % 2);
console.log(8 % 3) */

// Even or odd

// console.log(8 % 2);

const isEven = n => n % 2 === 0;

// Numeric separators
const n = 28_444_555_666;
const price = 15_00;

// BigInt

const maxNumber = 2 ** 53 - 1; // Max number that javascript can represent
const maxNumber2 = Number.MAX_SAFE_INTEGER; // same as above
const bigIntNumber = 3284712041293487123402193421129347129384234n;
const bigIntNumber2 = BigInt(3284712041293487123402n);

// console.log(bigIntNumber);

// Creating Dates
// Year, month, day, hour, minutes, seconds

const now = new Date(); // gives current date.
const dateAcc1 = new Date(account1.movementsDates[0]); // '2019-11-18T21:31:17.178Z'
console.log([
  dateAcc1.getFullYear(),
  dateAcc1.getMonth(),
  dateAcc1.getDay(),
  dateAcc1.getDate(),
  dateAcc1.getHours(),
  dateAcc1.getMinutes(),
  dateAcc1.getSeconds(),
]);
const dateParams = new Date(2022, 03, 14, 04, 55, 34);

// format num

const num = 38888.54;
const option = {
  style: 'currency',
  // unit: 'mile-per-hour'
  currency: 'EUR',
};
console.log(new Intl.NumberFormat('en-US', option).format(num));
console.log(new Intl.NumberFormat('jp-JP', option).format(num));
console.log(new Intl.NumberFormat('es-VE', option).format(num));

// timers
const ings = ['sauna', 'olives'];
const timer = setTimeout(
  (in1, in2) => console.log(`here is your pizza with ${in1}, and ${in2}`),
  3000,
  ...ings
);
console.log('waiting...'); // this console.log will appear first than timer
if (ings.includes('olives')) clearTimeout(timer); // clear timeout. It will not print to the console

// loop a timer
setInterval(() => {
  const now = new Date();
  console.log(
    `It's ${new Intl.DateTimeFormat('en-Us', { month: 'long' }).format(
      now
    )}, ${now.getHours()}:${now.getMinutes()} with ${now.getSeconds()}`
  );
}, 100_000);

'use strict';

function juicy (apple, orange) {
    console.log(apple, orange)
    const juice = `We make juice with ${apple} apples and ${orange} oranges`
    return juice
}
// Invoked-only functions do not return data, unless we wrap 'em inside a variable or use a console.log directly on it
const stink = juicy(5, 0)
console.log(stink)
console.log(juicy(5, 0))


// Functions coding challenge

// const calcAverage = (data1, data2, data3) => (data1 + data2 + data3) / 3

// DATA 1
const dolphinAvgScore1 = calcAverage(44, 23, 71) // 46
const koalasAvgScore1 = calcAverage(65, 54, 49) // 56

// DATA 2
const dolphinAvgScore2 = calcAverage(85, 54, 41); // 60
const koalasAvgScore2 = calcAverage(22, 23, 27); // 24

// check winner
function checkWinner (avgDolphins, avgKoalas) {
    let winner;
    if (avgDolphins >= avgKoalas * 2) {
        winner = `Dolphins win! (Dolphins ${avgDolphins} vs Koalas ${avgKoalas})`
    } else if (avgKoalas >= avgDolphins * 2) {
        winner = `Koalas win! (Koalas ${avgKoalas} vs Dolphins ${avgDolphins})`
    } else {
        winner = `It's a draw! (Dolphins ${avgDolphins} vs Koalas ${avgKoalas})`
    }
    return winner
}

console.log('DATA1', checkWinner(dolphinAvgScore1, koalasAvgScore1))
console.log('DATA2', checkWinner(dolphinAvgScore2, koalasAvgScore2))

// Arrays challenge

// const bill = 275
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`)
// const bills = [123, 255, 44]

// function calcTip (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// // const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + bills[2]]
// console.log('tips', tips)
// console.log('total', total)

// Objects 

// const jonas = {
//     firstName: 'jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }

// const interestedIn = prompt('Quieres sexo? Entonces escribe uno de las propiedades de jonas')

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
// } else {
//     console.log('Wrong answer! try again!')
// }

// const greet = `${jonas['firstName']} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`

// Objects challenge

// const mark = {
//     fullName: 'Mark Miller', 
//     weight: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = Math.floor(this.weight / this.height ** 2)
//         return this.bmi
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     weight: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = Math.floor(this.weight / this.height ** 2)
//         return this.bmi
//     }
// }

// john.calcBMI()
// mark.calcBMI()

// console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi}) `)

// // for loops
// // continue 

// const jonas = [
//     'jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'Teacher',
//     ['Michael', 'Peter', 'Steven']
// ]

// This will print only strings of the array jonas
// 'continue' keyword interrupt current iteration if condition returns true, going to next iteration
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i])
// }

// // 'break' keyword interrupt whole loop if condition returns true, exiting loop.
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i])
// }

// // Iterating backwards
// for (i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i])
// }

// While loop

// Needs to put the incremental number outside
// let rep = 1
// // While loops only needs a condition to keep running
// while (rep <= 10) {
//     console.log(rep)
//     rep++
// }

// Making dice rolling up to 6

// let dice = Math.trunc(Math.random() * 6) + 1

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`)
//     // If not resign variable, it will print an infinite loop.
//     dice = Math.trunc(Math.random() * 6) + 1
//     // Once dice was resigned, we could make an if statement to log the 6.
//     if (dice === 6) console.log(`You rolled a ${dice}`)
// }

// FINAL fundamentals codign challenge!

function calcTip (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]))
    totals.push(tips[i] + bills[i])
}

function calcAverage (arr) {
    let incremental = 0
    for (let i = 0; i < arr.length; i++) {
        incremental += arr[i]
    }
    return incremental / arr.length
}

console.log('Standart')
console.log('bills', bills)
console.log('tips', tips)
console.log('totals', totals)
console.log('AVERAGE')
console.log('bills', calcAverage(bills))
console.log('tips', calcAverage(tips))
console.log('totals', calcAverage(totals))
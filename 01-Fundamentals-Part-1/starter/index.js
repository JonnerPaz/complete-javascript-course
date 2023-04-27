// let js = 'Amazing';
// if (js === 'Amazing') alert ('Javascript is fun!');

// BMI = mass / height **2 = mass / (height * height) 


// Coding challenge #1 and #2
// const markMass = 78
// const markHeight = 1.69
// const johnMass = 92
// const johnHeight = 1.95

// const markBMI = markMass / markHeight **  2
// const johnBMI = johnMass / (johnHeight * johnHeight)

// if (markBMI > johnBMI) {
//     console.log(`Marks BMI (${Math.floor(markBMI)}) is higher than John's (${Math.floor(johnBMI)})`)   
// } else {
//     console.log(`John's (${Math.floor(johnBMI)}) is higher than Marks BMI (${Math.floor(markBMI)})`)
// }

// Coding challenge 4#

/*
const day = 'sunday' 

if (day === 'monday') {
    console.log('execute 1')
} else if (day === 'tuesday') {
    console.log('execute 2')
} else if (day === 'wednesday' || day === 'thursay') {
    console.log('execute 3')
} else if (day === 'friday') {
    console.log('execute 4')
} else if (day === 'saturday' || day === 'sunday') {
    console.log('execute 5')
} else {
    console.log('No day entry')
}
*/

// Coding challenge #5

const bill = 275
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`)
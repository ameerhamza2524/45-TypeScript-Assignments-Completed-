

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = 'subaru';


// test 01
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // true

// test 02
console.log("Is car == 'Subaru? I predict True.");
console.log(car === 'subaru'); // true



// test 03
console.log("Is car != 'Hounda' I predict True.");
console.log(car != 'Hounda'); // true

// test 04
console.log("Is car !== 'Mhran' I predict True.");
console.log(car !== 'Mhran'); // true

// test 05
console.log("Is car.uperCase == 'SUBARU' I predict True.");
console.log(car.toUpperCase() == 'SUBARU'); // true

// test 06
console.log("Is car.lowarCase == 'SUBARU' I predict false.");
console.log(car.toLowerCase() == 'SUBARU'); // false

// test 07
console.log("Is car == 'carola'? I predict false.");
console.log(car == 'carola'); // true

// test 08
console.log("Is car == 'FX? I predict fasse.");
console.log(car === 'FX'); // true


// test 09
console.log("Is car != 'subaru' I predict false.");
console.log(car != 'subaru'); // true

// test 10
console.log("Is car !== 'subaru' I predict false.");
console.log(car !== 'subaru'); // true

// test 11
console.log("Is car.uperCase == 'subaru' I predict false.");
console.log(car.toUpperCase() == 'subaru'); // false

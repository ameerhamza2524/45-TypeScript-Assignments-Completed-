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

// test 12
// Equality
let number1: number = 255244;
let number2: number = 255244;
console.log(number1 === number2); // True

// Inequality
let number3: number = 25552444;
console.log(number3 !== number1); // True

// False tests
console.log(number1 === number3); // False
console.log(number1 !== number2); // False

//test 13
let upperCaseName: string = "Hazma";
let lowerCaseName: string = "Ameer";

// True
console.log(upperCaseName.toLowerCase() === lowerCaseName); // True

// False
console.log(upperCaseName.toLowerCase() !== lowerCaseName); // False

// test 14

let num1: number = 10;
let num2: number = 20;

// Equality and Inequality
console.log(num1 === 10); // True
console.log(num1 !== 20); // True

// Greater than and Less than
console.log(num2 > num1); // True
console.log(num1 < num2); // True

// Greater than or equal to and Less than or equal to
console.log(num1 >= 10); // True
console.log(num2 <= 20); // True

// False tests
console.log(num1 === num2); // False
console.log(num1 > num2); // False
console.log(num1 >= num2); // False
console.log(num2 < num1); // False
console.log(num2 <= num1); // False

// test 15
let a: boolean = true;
let b: boolean = false;

// "and" operator
console.log(a && !b); // True
console.log(a && b); // False

// "or" operator
console.log(a || b); // True
console.log(b || false); // False

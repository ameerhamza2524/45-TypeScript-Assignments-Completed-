import { log } from "console";

let sentanc:string  = 'hello i am ameer hamza'
let lowerCase:string = sentanc.toLowerCase();

let uperCase:string = sentanc.toUpperCase();

let titleCase:string = sentanc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
// console.log(sentanc.charAt(0).toUpperCase()+sentanc.slice(1,15));

console.log(lowerCase);
console.log(uperCase);
console.log(titleCase);


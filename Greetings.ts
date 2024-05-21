// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name



// let frindsName:string[] = ['Afridy','sameer','haseeb','zoheb',]

// // let message:string= ('bahi kell zoheb bahi ki taraf se bahi ap ko party he ')

// // for(let d=0; d<frindsName.length ; d++){
// //     console.log(message + frindsName[d]);
    
// // };
  
// frindsName.map((item)=> console.log(item,'afridy bahi ka dill lal pary pe a gya'))

let names: string[] = ["Zoheb", "Sameer ", "Afridy", "lal bkux"];

for (let name of names) {
    console.log(`Hello, ${name}! Welcome to our platform.`);
}


let animals: string[] = ["Dog", "Cat", "Rabbit"];



console.log("\nStatements about each animal:");
for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];
    if (animal == "Dog"){
        console.log(`A ${animal} would make a loyal pet.`);   
    }
    else if(animal == "Cat"){
        console.log(`A ${animal} would be independent and playful.`);
        
    }else if(animal == "Rabbit"){
        console.log(`A ${animal} would be cute and cuddly.`);
        
    }else{
        console.log(`I don't have information about ${animal}.`);
        
    }

}

// Print what these animals have in common
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");

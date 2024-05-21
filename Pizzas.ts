let pizzas: string[] = ["Margherita", "Pepperoni", "BBQ Chicken"];

// Loop through the array and print each pizza name.
for (let i = 0; i < pizzas.length; i++) {
    let p = pizzas[i]
if (p === "Margherita") {
    console.log(`I really like ${p}`);
} else if (p === "Pepperoni") {
    console.log(`I most like ${p} pizza`);
} else if (p === "BBQ Chicken") {
    console.log(`I like ${p} pizza so-so`);
} else {
    console.log(`I have no strong feelings about ${p} pizza`);
}
}


console.log('\n Pizza ki har ek bite mein swaad hai, ek anokha ehsaas hai. Uske cheese ka melt, uske toppings ki rangeeniyon ka maza hi kuch aur hai. Har morsel ek safar hai, jismein har swad ek kahani sunata hai.');

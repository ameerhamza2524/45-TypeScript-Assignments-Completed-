// Function jo items ko accept karta hai aur sandwich ka summary print karta hai
function make_sandwich(...items: string[]): void {
    console.log("You have ordered a sandwich with the following items:");
    for (let item of items) {
      console.log(`- ${item}`);
    }
    console.log("\n"); // Newline for better readability
  }
  
  // Function ko teen dafa mukhtalif items ke saath call karte hain
  make_sandwich('Turkey', 'Lettuce', 'Tomato', 'Mayo');
  make_sandwich('Ham', 'Cheese');
  make_sandwich('Chicken', 'Bacon', 'Avocado', 'Ranch', 'Lettuce', 'Tomato');
  
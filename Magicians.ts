// Magicians ke names ka array
const magicians: string[] = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller', 'David Copperfield'];

// Function jo magicians ke names print karta hai
function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

// Function ko call karke magicians ke names print karte hain
show_magicians(magicians);

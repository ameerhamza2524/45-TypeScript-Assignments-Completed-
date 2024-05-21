// Magicians ke names ka array
const magicians: string[] = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller', 'David Copperfield'];

// Function jo magicians ke names print karta hai
function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

// Function jo magicians ke names modify karta hai
function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `the Great ${magicians[i]}`;
  }
}

// Magicians ke names ko modify karte hain
make_great(magicians);

// Modified names ko print karte hain
show_magicians(magicians);

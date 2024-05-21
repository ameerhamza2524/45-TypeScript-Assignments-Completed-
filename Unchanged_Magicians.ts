// Magicians ke names ka array
const magicians: string[] = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller', 'David Copperfield'];

// Function jo magicians ke names print karta hai
function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

// Function jo magicians ke names modify karta hai aur nayi array return karta hai
function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [...magicians];
  for (let i = 0; i < great_magicians.length; i++) {
    great_magicians[i] = `the Great ${great_magicians[i]}`;
  }
  return great_magicians;
}

// Original array ko copy karke modify karte hain
const great_magicians = make_great(magicians);

// Original aur modified arrays ko print karte hain
console.log("Original magicians:");
show_magicians(magicians);

console.log("\nGreat magicians:");
show_magicians(great_magicians);

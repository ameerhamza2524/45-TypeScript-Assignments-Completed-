// Original order
let places = ["Karachi", "ghorak", "phalasteen", "madina", "makkah"];

console.log("Original order:");
console.log(places);

// Alphabetical order (without modifying original array)
let alphabeticalOrder = [...places].sort();
console.log("\nAlphabetical order:");
console.log(alphabeticalOrder);

// Original order
console.log("\nOriginal order (still intact):");
console.log(places);

// Reverse alphabetical order (without modifying original array)
let reverseAlphabeticalOrder = [...places].sort().reverse();
console.log("\nReverse alphabetical order:");
console.log(reverseAlphabeticalOrder);

// Original order
console.log("\nOriginal order (still intact):");
console.log(places);

// Reversed order
let reversedOrder = [...places].reverse();
console.log("\nReversed order:");
console.log(reversedOrder);

// Reverse again to return to original order
reversedOrder.reverse();
console.log("\nBack to original order:");
console.log(reversedOrder);

// Sorted in alphabetical order
let sortedAlphabetical = [...places].sort();
console.log("\nSorted in alphabetical order:");
console.log(sortedAlphabetical);

// Sorted in reverse alphabetical order
let sortedReverseAlphabetical = [...places].sort().reverse();
console.log("\nSorted in reverse alphabetical order:");
console.log(sortedReverseAlphabetical);

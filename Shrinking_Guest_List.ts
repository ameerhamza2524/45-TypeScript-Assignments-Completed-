
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestName :string[] = ['Shabir Afridy ','Sameer Bahi','Zoheb Ahmed'];

 let dontAtand = 'Shabir Afridy'

 console.log(`\n\tMr ${dontAtand} \n AP kane par nahi a sakh te`);

let newMessage = 'ap sabe k len kosh kabry he ham ne ek big tabel aranng k he new Gurest k len' 

let newGuestName = guestName.unshift('Bait Malik')


  guestName.unshift('Huzaifa Malik')
  guestName.splice(1,0 ,'Arbaz malik')
  guestName.push('Whabe Malik')

 // Remove guests until only two names remain
while (guestName.length > 2) {
  let removedGuest = guestName.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

  


 for (let i=0 ; i <guestName.length; i++){
     console.log(`\nDear Mr \n\n ${guestName[i]} \n Big diner for my speshal day Enjoye\n\n Thanks\n`);
    
 };

 // Remove the last two names
guestName.pop();
guestName.pop();

// Print the empty list
console.log("Guest list:", guestName);
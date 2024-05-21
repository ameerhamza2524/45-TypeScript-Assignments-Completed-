// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestName :string[] = ['Shabir Afridy ','Sameer Bahi','Zoheb Ahmed'];

 let dontAtand = 'Shabir Afridy'

 console.log(`\n\tMr ${dontAtand} \n AP kane par nahi a sakh te`);

let newMessage = 'ap sabe k len kosh kabry he ham ne ek big tabel aranng k he new Gurest k len' 


let newGuestName = guestName.unshift('Bait Malik')


console.log(`\t \t \t \t \t ${newMessage} \t \t \t `);




//  for (let i=0 ; i <guestName.length; i++){
//      console.log(`\nDear Mr \n\n ${guestName[i]} \n aj rat mery taraf se party \n\n Thanks\n`);
    
//  };

  guestName.unshift('Huzaifa Malik')
  guestName.splice(1,0 ,'Arbaz malik')
  guestName.push('Whabe Malik')


 for (let i=0 ; i <guestName.length; i++){
     console.log(`\nDear Mr \n\n ${guestName[i]} \n Big diner for my speshal day Enjoye\n\n Thanks\n`);
    
 };


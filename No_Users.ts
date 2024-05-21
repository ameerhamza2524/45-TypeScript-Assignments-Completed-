
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// // • Remove all of the usernames from your array, and make sure the correct message is printed


let personeName :string[] = ['Ameer Hamza','Abdul Basit','Afridy','Zoheb Ahmad'];

for(let i = 0 ;i <personeName.length;i++){
    if(personeName.length === 0){
        console.log('hello ' + personeName);
        
    }else{
        personeName = []
        console.log('We need to find some users!');
        
    }
}

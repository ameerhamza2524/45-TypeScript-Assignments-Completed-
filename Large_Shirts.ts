function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`I'm making a ${size} t-shirt with "${message}" printed on it.`);
  }
  
  // Large shirt with default message
  make_shirt();
  
  // Medium shirt with default message
  make_shirt("Medium");
  
  // Any size shirt with different message
  make_shirt("Small", "Python is cool too!");
 
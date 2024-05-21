// Function jo car ke information ko object mein store karta hai
function make_car(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let car = {
      manufacturer,
      model,
    } as { manufacturer: string, model: string, [key: string]: any }; // Assertion here
  
    // Additional options ko car object mein add karte hain
    for (let option of options) {
      for (let key in option) {
        if (option.hasOwnProperty(key)) {
          car[key] = option[key];
        }
      }
    }
  
    return car;
  }
  
  // Function ko call karte hain aur object ko print karte hain
  const car1 = make_car('Toyota', 'Corolla', { color: 'blue', sunroof: true });
  const car2 = make_car('Tesla', 'Model S', { color: 'red', autopilot: true, wheels: 'alloy' });
  
  console.log(car1);
  console.log(car2);
  
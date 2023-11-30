// Write code that stores all of the 'vehicle' property names in an array called keys.

let vehicle = {
    manufacturer: 'Tesla',
    model: 'Model X',
    year: 2015,
    range: 295,
    seats: 7
  };
  
  let keys = Object.keys(vehicle);
  console.log(keys);

// Our solution leverages the Object.keys() method, which returns an array of a given object's own properties. 
// You can achieve the same by means of a for...in loop, pushing each object key into an array:

 
  let key = [];
  
  for (let property in vehicle) {
    key.push(property);
  }
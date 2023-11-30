// Add a property to the below object, mahsoo, so that the code on line 17 logs 'Hej, Bobby!' to the console.



let mahsoo = {
    firstName: 'mahsoo',
    lastName: 'Harrelson',
    age: 32,
    location: {
      country: 'Denmark',
      city: 'Aarhus'
    },
    occupation: 'engineer',
    greet: (person) => `Hej, ${person}!` // a function
  };
  
  // method invocation
  console.log(mahsoo.greet('Bobby')); // Hej, Bobby!
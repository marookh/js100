// Explain why "It's true!" is never output:

let obj = {
    num: 42,
    'property name': 'string value',
    true: false,
    fun: function() {
      console.log('Harr Harr!');
    },
  };
  
  for (let prop in obj) {
    if (prop === true) {
      console.log("It's true!");
    }
  }

  // The condition of our if statement on line 11 returns false for all properties, 
  // because property names are always strings, 
  // while the body of our for loop looks for the Boolean value true.

  // In order for our code to log "It's true!", we need to compare obj's properties to 'true':


for (let prop in obj) {
  if (prop === 'true') {
    console.log("It's true!");
  }
}
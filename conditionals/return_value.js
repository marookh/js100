let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

typeof tweet;  // => returns 'string'
typeof words;  // => returns 'object'
typeof isValid; // => returns 'boolean'
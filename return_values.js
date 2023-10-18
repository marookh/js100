### Solution

```JavaScript
let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

typeof tweet;  // => returns 'string'
typeof words;  // => returns 'object'
typeof isValid; // => returns 'boolean'
```

### Discussion

The split() method is an instance method which is called on string values. Since it takes a pattern, then divides that string's values, then returns an array of those string values, there are three ways that we can invoke this method, one of them is the above:
tweet.split(' ') which returns an array of separated  sub-strings.

In the second expression `tweet.length < 140` here we compare the length of returned array with the number 140, since the array length is less than 140, the expression evaluates to true, thus the variable `isValid` gets initialized to a boolean value.

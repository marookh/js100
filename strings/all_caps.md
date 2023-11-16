Take the string `'confetti floating everywhere'` and transform it to upper case.

### Solution
```JavaScript
let string = 'confetti floating everywhere';

string.toUpperCase(); // CONFETTI FLOATING EVERYWHERE
console.log(string)
```

### Discussion
Our solution leverages the` String.prototype.toUpperCase()` method. This method returns a new string, with the calling string's characters converted to uppercase. To see that this method returns a new string rather than mutating the original one, we log string to the console after line 8.


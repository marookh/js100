Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?

```JavaScript
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin'
```

### Solution
```JavaScript
string1.toLowerCase() === string2.toLowerCase(); // true
string1.toLowerCase() === string3.toLowerCase(); // false
```

### Discussion
A very simple way to check case-insensitive equality of strings is to first turn them to all lower or upper case and then compare them.


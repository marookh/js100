Write a function that checks whether a string is empty or not. For example:

```JavaScript
isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
```

### Solution
```JavaScript
function isBlank(string) {
  return string.length === 0;
}

// or

function isBlank(str) {
    return str.trim().length === 0;
}

console.log(isBlank('   ')); // true
console.log(isBlank('')); // true
console.log(isBlank('blank?')); // false
```
### Discussion
The `String.prototype.trim()` method removes whitespaces from both ends of a string. Once we removed those whitespaces, we can use the same strategy as in the previous exercise.



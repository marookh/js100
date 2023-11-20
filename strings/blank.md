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
    if (str.length === 0) {
        return true;
    }
    return false;
}

console.log(isBlank(' ')); // false
console.log(isBlank('')); // true
console.log(isBlank('blank?')); // false
```
### Discussion

A string is empty if it does not contain any characters. The easiest way to check this is to look at the length of the string.



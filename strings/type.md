How can you check whether a variable holds a value that is an array? For example, imagine you start writing a function and want to check whether its argument is an array:

```JavaScript
function filter(input) {
  // Is input an array?
}
```
### Solution
We can use [the `Array.isArray()`method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray). For example:

```JavaScript
let someValue1 = [0, 1, 0, 0, 1];
let someValue2 = 'I leave you my Kingdom, take good care of it.';

Array.isArray(someValue1); // true
Array.isArray(someValue2); // false
```

### Discussion
Note that [the `typeof` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) returns 'object' for arrays, because arrays are objects. Therefore it does not distinguish between arrays and other objects
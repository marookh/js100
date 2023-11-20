Write a function that returns the first element of an input array. For example:

```JavaScript
first(['Earth', 'Moon', 'Mars']); // 'Earth'
```

What would you return if the input array was empty?

### Solution
```JavaScript
function first(array) {
    return array.length !== 0 ? array[0] : undefined;
}
console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'
console.log(first([])); // undefined
```

### Discussion
With this implementation, `first` returns `undefined` if the input array is empty. It is the same behavior you get for trying to access an index that is outside the bounds of the array.
The first element of an array is at index position `0`, and we access it using bracket notation.


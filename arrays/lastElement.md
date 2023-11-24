Solution
```JavaScript
function last(array) {
  return array[array.length - 1];
}
let array = [4, 5, 6, 7];
console.log(last(array));
```

As in the previous exercise, `last` returns `undefined` if the input array is empty.

### Discussion
Because arrays in JavaScript have a zero-based index, the last element of an array is at an index position one less than its length. For example, in an array with three elements, the elements are at index positions 0 (the first element), 1, and 2 (the last element).
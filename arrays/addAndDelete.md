We are given the following array of energy sources.

```JavaScript
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
```

Remove `'fossil'` from the array, then add `'geothermal'` to the end of the array.

### Solution
Adding an element:

```JavaScript
energy.push('geothermal');
```

Removing an element:

```JavaScript
energy.shift();
```
Or:

```JavaScript
energy = energy.slice(1);
```

Or:

```JavaScript
energy.splice(0, 1);
```
### Discussion
The easiest way to append an element to an array is using the `Array.prototype.push() `method. This adds the element to the end of the list. If you wanted to add it to the beginning of the list, you could use the `Array.prototype.unshift()` method.

We also want to remove `'fossil'`, the first element in the array. There are several ways to do this:

`energy.shift()` does exactly that: it removes the first element from the array. Note that it changes the original array.

`energy.slice(1)` returns a new array containing all elements of energy from index 1 to the end. Since it does not change the original array, our solution re-assigns energy to the new array returned by slice.

`energy.splice(0, 1)` removes 1 element from energy, starting at index 0. This method probably takes a while to wrap one's head around, but it is one we could use also for removing any other element of an array, not just the first one.


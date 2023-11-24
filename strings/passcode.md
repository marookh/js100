We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).

```JavaScript
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'
```

### Solution
```JavaScript
passcode.join('-'); // '11-jZ5-hQ3f*-8!7g3-p3Fs'
```
### Discussion
The `Array.prototype.join()` method easily allows us to join all elements of an array into a new string, with a custom separator.



Implement a function `repeat` that repeats an input string a given number of times without using the pre-defined string method` String.prototype.repeat()`.

### Solution
```JavaScript
function repeat (times, string) {
    let repeated = ' ';
    for (let i = 0; i <= times; i += 1) {
        repeated += string;
    }
    return repeated;
}

console.log(repeat(5, 'oh'));
console.log(repeat(3, 'ha'));
// ohohohohoh
// hahaha
```
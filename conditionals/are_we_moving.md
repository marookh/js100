### Solution
```JavaScript
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);  // true
```
### Discussion
It returns true, because both operands of **&&** operator becomes true.
And we need to use parentheses with **&&** operator, because (&&) has a higher operator precedence than (||).
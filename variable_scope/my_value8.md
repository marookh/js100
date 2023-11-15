What will the following code log to the console and why? Don't run it until you have tried to answer.

```JavaScript
let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);
Hide Solution & Discussion
Solution
The code logs 2.
```

### Discussion
This is another example of variable shadowing: The parameter `a` of `myFunction` shadows the variable `a` declared on line 1. The `a` we reference within the function body, on line 4, therefore refers to whatever argument is passed to the function, in our case the value of `b`, which is then logged.


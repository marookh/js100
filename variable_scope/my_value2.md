What will the following code log to the console and why? Don't run it until you have tried to answer.

```JavaScript
console.log(greeting);

let greeting = 'Hello world!';
```

### Solution

```JavaScript
ReferenceError: Cannot access 'greeting' before initialization
```
### Discussion
In contrast to var variables, let variables are not accessible before they are declared. For that reason the above code raises an error.


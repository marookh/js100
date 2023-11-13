### Solution

```JavaScript
let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}
```

Error has many types and one of them is SyntaxError which gives a message "unexpected token".  [The MDN page on syntaxerror] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token) says that one of the cases of arising this error is that you leave out parentheses around if statements, which is in the given code.

### Discussion

The MDN reference on JavaScript errors lists many errors that you will run into as you write more code. If you're unsure why you're seeing a particular error, pause and check out the documentation.
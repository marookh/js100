Predict the output of the following code:

```JavaScript
if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}
```

### Solution
The AND & operator returns true if both operands are true or truthy values. In this case the first operand is truthy so it checks the last operand, while it is false or falsy value it then returns false. Thus, the code in else statement will be executed. Therefore, the output is:
```JavaScript
No..
```
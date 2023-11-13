### Solution

[The MDN page on TypeError] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) describes that "The TypeError object represents an error when an operation could not be performed, typically when a value is not of the expected type." One of the cases is to "when attempting to use a value in an inappropriate way." which matches in the given code.

```JavaScript 
let tweet = 'Woohoo! :-)';
# highlight
if (tweet.length() > 140) {
# endhighlight
  console.log('Tweet is too long!');
}
TypeError: tweet.length is not a function
```
In the above code we are trying to use `length` property of string instance like a function. Since length is a property not a function so you can't use parenthesis around it. 

The correct form is as follow:
```JavaScript
let tweet = 'Woohoo! :-)';
# highlight
if (tweet.length > 140) {
# endhighlight
  console.log('Tweet is too long!');
}
```

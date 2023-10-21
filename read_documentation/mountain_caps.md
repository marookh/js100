Is there a method to capitalize a string, for example turning 'mountain' into 'Mountain'?

### Solution
There is no special method to Capitalize a 'string', but we can create our own using other built-in methods. 


### Discussion

Although MDN web ducs  contains all the information, methods, references in JavaScript language but there is not any string method to capitalize its instance.

``` JavaScript
function capitalizeFirstLetter(string) {
   return string[0].toUpperCase() + string.slice(1);
}

capitalizeFirstLetter('mountain');

// Output: Mountain
```
### Solution

```JavaScript
typeof 23.5;  // => 'number'
typeof 'Call me Ishmael.'; // => 'string'
typeof false; // => 'boolean'
typeof 0;  // => 'number'
typeof null; // => 'object'
typeof undefined; // => 'undefined'
```

### Discussion

*typeof*  is an operator that requires an operand. The return values of this operator is a string which represents the type of that given value. The operand can be either primitive or object type.

Take care to read the [documentation carefully](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof): typeof returns what you would expect for most primitive types, but note that typeof null returns the string 'object'. This is a [historic bug](http://2ality.com/2013/10/typeof-null.html) and it's too late to change it without breaking existing code. There's no need to understand the details behind it, it's only important to be aware of the fact that JavaScript will claim null to be an 'object'.

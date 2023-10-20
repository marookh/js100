### Solution 

``` JavaScript
'8' == 8;     // => true
'8' === 8;  // => false
```

### Discussion

1. Here we use ** ==** Equality or loose equality operator which converts the string to a number type when comparing, then if the values were equal returns true, false otherwise. Loose equality operator attempts to convert operands and compare operands of a different data types. Therefore, the above expression evaluates to true.
2. The second expression evaluates to false since ** ===** Strict Equality operator checks if the operands and their types are the same, if so returns true, false otherwise. It doesn't coerce the operands to be the same type. Thus it return false in the above example.
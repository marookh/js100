### Solution

```JavaScript
let today = new Date(); // 2023-10-21T16:16:40.267Z

today.getYear(); // 123
today.getFullYear(); // 2023
```
Firstly, the Date() constructor creates Date objects. When called as a function, it returns a string representing the current time.

Secondly, since `getYear()` does not return full years ("year 2000 problem"), it is **deprecated** and has been replaced by the `getFullYear()` method, therefore we can use `getFullYear()` method to get the current year. The `getYear()` method returns the year minus 1900; thus: For years greater than or equal to 2000, the value returned by `getYear()` is 100 or greater. For example, if the year is 2023, `getYear()` returns 123. 

Lastly, the Date.getFullYear - returns a four-digit number representing the year of the date.
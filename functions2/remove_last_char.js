// Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.


// Solution
function removeLastChar(string) {
    return string.substring(0, string.length - 1);
  }

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

// One of several ways to return only part of a string
// is to use the String.prototype.substring() method. 
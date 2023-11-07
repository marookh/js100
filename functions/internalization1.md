Write a function that takes an [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and returns a greeting in that language.


### Solution
```JavaScript
function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

// Example:
console.log(greet('sv'));
```
### Discussion
Note that if we use return statements in the clauses, we don't need to include additional break statements, because return will immediately exit from the function anyway.


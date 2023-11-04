Implement a function cite that takes two string arguments: the author of the quote and what they said. It then logs the quote to the console, as in the following example.

```JavaScript
cite('Brendan Eich', 'Always bet on JavaScript.');
// logs:
// Brendan Eich said: "Always bet on JavaScript."
```

### Solution
```JavaScript
function cite(authur, quote) {
    console.log(`${authur} said: "${quote}"`);
}
cite('Brenden Eich', 'Always bet on JavaScript.');
```

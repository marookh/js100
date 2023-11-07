Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.

### Solution
```JavaScript
'Captain Ruby'.replace('Ruby', 'JavaScript');
```

### Discussion
There is more than one way to achieve this. Arguably the most straightforward one is to use the String.prototype.replace() method. Another possibility is to extract the first part of the input string, 'Captain', and concatenate it with 'JavaScript'. For example:

```JavaScript
'Captain Ruby'.substring(0, 8) + 'JavaScript';
```
Or:

```JavaScript
'Captain Ruby'.split(' ')[0] + ' JavaScript';
```
It is often the case that there is more than one way to achieve some result. Exploring different ways makes you more familiar with the language and can give you insights into possible trade-offs. Ultimately, we advise you to choose the solution that is easiest to understand.


Write code that checks whether the string `byteSequence` contains the character x.

```JavaScript
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
```

### Solution
```JavaScript
function include(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return true;
    }
  }
  return false;
}
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(include(byteSequence, 'x'));
```

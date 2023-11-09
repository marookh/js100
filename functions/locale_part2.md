Write a function that extracts the language code from a [locale](https://en.wikipedia.org/wiki/Locale_(computer_software)). 


### Solution
```JavaScript
function extractRegion(locale) {
    return locale.substring(3, 5);
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'
```

### Discussion
The `substring()` method of string value is used here that return the substrings on the given indexes, which in our case is the region in a locale.
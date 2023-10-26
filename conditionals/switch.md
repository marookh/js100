Take a look at the code below. Without running it, determine what it will log to the console. 

```JavaScript
let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}
```
### Solution
Because the value of animal is 'horse', the following is logged to the console:
```JavaScript
neigh
tweet tweet
*cricket*
Discussion
```

In order to avoid this "fall through" behavior, we can place a break statement in each clause of our switch statement, as seen below:


```JavaScript
let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
    break;
  case 'horse':
    console.log('neigh');
    break;
  case 'bird':
    console.log('tweet tweet');
    break;
  default:
    console.log('*crickets*');
}
```




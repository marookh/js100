// Calculate the sum of two numbers

function doubleIt(num1, num2) {
   if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
   } 
}

console.log(doubleIt(3, '3')); // return undefined
console.log(doubleIt('4', 5)); // return undefined
console.log(doubleIt(3, 2)); // return 5
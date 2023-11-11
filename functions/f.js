/*
function brendanEichQuote() {
    console.log('Always bet on JavaScript.');
}

brendanEichQuote();
// logs:
// Always bet on JavaScript.

function cite(authur, quote) {
    console.log(`${authur} said: "${quote}"`);
}
cite('Brenden Eich', 'Always bet on JavaScript.');

function squaredNumber(number) {
    return number * number;
}
console.log(squaredNumber(3));
console.log(squaredNumber(4));

function multiplesOfThree() {
    let divisor = 1;
  
    for (let dividend = 3; dividend <= 30; dividend += 3) {
      console.log(dividend + ' / ' + divisor + ' = 3');
      divisor += 1;
    }
  }
  
  multiplesOfThree();

function compareByLength(string1, string2) {
    if (string1.length < string2.length) {
        return -1;
    } else if (string1.length > string2.length) {
        return 1;
    } else {
        return 0;
    }
}

console.log(compareByLength('hello', 'by'));
console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0

let string = 'Captain Ruby';
let repString = string.replace('Ruby', 'JavaScript');
console.log(repString);
console.log(string);

function greet(arg = 'Salamuna') {
    switch (arg) {
        case 'en': return 'Hi';
        case 'ps': return 'Salam';
        case 'ar': return 'Assalmu Alaikum';
        case 'fa': return 'Che khabar';
        default: return 'Hello';
    }
}

console.log(greet('en'));
console.log(greet('ps'));
console.log(greet('fa'));

function extractLanguageCode(locale) {
    console.log(locale.substring(0, 2));
}

extractLanguageCode('en_US.UTF-8');  // 'en'
extractLanguageCode('en_GB.UTF-8');  // 'en'
extractLanguageCode('ko_KR.UTF-16'); // 'ko'


greet('Mahsa');

function greet(name) {
    console.log('How are ' + name + '?');
}

function extractLanguage(locale) {
    return locale.substring(3, 5);
  }

console.log(extractLanguage('en_US.UTF-8'));

function extractRegion(locale) {
    return locale.substring(3, 5);
}

console.log(extractRegion('en_US.UTF-8'));
*/

/*

let rlSync = require('readline-sync');
let firstName = rlSync.question("What is your first name?\n");
let lastName = rlSync.question("What is your last name?\n");

function greet(firstName, lastName) {
    console.log("Hello, " + firstName + ' ' + lastName + "!");
}

greet(firstName, lastName);

function multiply(num1, num2) {
    return num1 * num2;
}

function getNumber() {
    
    let num1 = Number(rlSync.question("Enter your first number: "));
    let num2 = Number(rlSync.question("Enter your second number: "));
    return multiply(num1, num2);
}

console.log(getNumber());



function extractLanguage(locale) {
    return locale.split('_')[0];
  }

let language = extractLanguage('en_US.UTF-8');

function extractRegion(locale) {
    return locale.substring(3, 5);
}

let region = extractRegion('en_US.UTF-8');
*/

function extractLanguage(locale) {
    return locale.split('_')[0];
  }
  
  function extractRegion(locale) {
    return locale.split('.')[0].split('_')[1];
  }
  
  function greet(lang) {
    switch (lang) {
    case "en" : return 'Hi!';
    case "fr" : return 'Salut!';
    case "pt" : return 'Ola!';
    case "de" : return "Hallo";
    case "sv" : return "Hej";
    case "af" : return "Haai";
    }
  }
  
  function localGreet(locale) {
    let language = locale.split('_')[0];
    let region = locale.split('.')[0].split('_')[1];
      switch (region) {
      case "US" : return "Hey!";
      case "GB" : return "Hello!";
      case "AU" : return "Howdy!";
      default : return greet(language);
      }
  }
  
  console.log(localGreet("en_US.UTF-8"));
  console.log(localGreet('en_GB.UTF-8'));
  console.log(localGreet('fr_MA.UTF-16'));
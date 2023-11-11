function extractLanguage(locale) {
    return locale.split('_')[0];
  }

let language = extractLanguage('en_US.UTF-8');

function extractRegion(locale) {
    return locale.substring(3, 5);
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
    let language = extractLanguage(locale)
    let region = extractRegion(locale)
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
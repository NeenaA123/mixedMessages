let userName = 'Neena';
// Terniery expression. Checking to see if userName is empty or not. If it does have a string, we do want a console.log to say 'Good Morning' followed by the variable userName. Or if the string is empty, then we only what to say 'Good Morning'.
userName ? console.log(`Good Morning, ${userName}!`) : console.log('Good Morning!');

let randomNumber = Math.floor(Math.random() * 4);
// Math.random generates a random decimal number between the whole numbers 0 & 1. Math.floor rounds down to the nearest integer. We only need number between 0 & 3 so we multiply that number by 4.
//console.log(randomNumber);

let quote = '';
// Create random quotes depending on the random number generated each time the code is run. With 4 available responses, creating a switch statement to handle the cases depending on the random number received.
switch(randomNumber) {
  //Remember: Lines with case end with :
  case 0:
    quote = 'Every day may not be good, but there is something good in every day.';
    break;
  case 1:
    quote = 'One small positive thought in the morning can change your whole day.';
    break;
  case 2:
    quote = 'It is a good day to have a good day.';
    break;
  case 3:
    quote = 'All you need is a smile and positive thoughts to make today a great day.';
    break;
    }; 

console.log(`Your quote for today is: "${quote}"`);

let action = '';
switch(randomNumber) {
   case 0:
    action = 'smile more';
    break;
  case 1:
    action = 'be positive';
    break;
  case 2:
    action = 'laugh more';
    break;
  case 3:
    action = 'be kind';
    break;
    }; 

console.log(`Try to ${action} today.`);

let word = '';
switch(randomNumber) {
   case 0:
    word = '"propitious": having qualities which inspire hope';
    break;
  case 1:
    word = '"inspire": to fill with courage or strength of purpose';
    break;
  case 2:
    word = '"serendipidous": happening because of good luck or chance';
    break;
  case 3:
    word = '"providential": coming or happening by good luck, especially unexpectedly';
    break;
    }; 

console.log(`Try to use this word today: "${word}".`);
userName ? console.log(`Have a great day, ${userName}!`) : console.log('Have a great day!');
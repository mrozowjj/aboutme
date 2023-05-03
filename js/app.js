'use strict';

// Used class example as a starting point: https://github.com/codefellows/seattle-code-201d100/blob/main/class-02/inclass-project-setup/js/app.js

console.log('hey world hey!');

// DONE: Ask the user their name through a prompt()

let userName = prompt('What\'s your name?');
console.log(userName);

/* function YesOrNoGame(objectOfQuestion,objectOfQuestionYesOrNo)
{
  let questionGuess = prompt('Do I have a ${objectOfQuestion}?').toLowerCase();

  if(questionoGuess === 'y' || questionTwoGuess === 'yes'){
    alert('You are correct!');
  } else if(questionTwoGuess === 'n' || questionTwoGuess === 'no'){
    alert('Sorry you are wrong, I have a daughter');
  }
  else
  {
    alert('You didn\'t input a yes or a no');
  }
}

YesOrNoGame(Dog,yes); */

let userCorrectGuesses = 0;

function guesingGame()
{
  alert(`Welcome to my site ${userName}! Let's play a guessing game, please answer yes/no OR y/n`);
  let questionOneGuess = prompt('Do I have a dog?').toLowerCase();
  if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
    alert('Sorry you are wrong, I don\'t have a dog');
  } else if(questionOneGuess === 'n' || questionOneGuess === 'no'){
    alert('You are correct!');
    userCorrectGuesses++;
  }
  else
  {
    alert('We can\'t play the game because you didn\'t input a yes or a no');
  }

  let questionTwoGuess = prompt('Do I have a cat?').toLowerCase();
  if(questionTwoGuess === 'y' || questionTwoGuess === 'yes'){
    alert('Sorry you are wrong, I don\'t have a cat');
  } else if(questionTwoGuess === 'n' || questionTwoGuess === 'no'){
    alert('You are correct!');
    userCorrectGuesses++;
  }
  else
  {
    alert('We can\'t play the game because you didn\'t input a yes or a no');
  }

  let questionThreeGuess = prompt('Do I like video games?').toLowerCase();
  if(questionThreeGuess === 'y' || questionThreeGuess === 'yes'){
    alert('You are correct! I love video games!');
    userCorrectGuesses++;
  } else if(questionThreeGuess === 'n' || questionThreeGuess === 'no'){
    alert('Sorry you are wrong, I love video games!');
  }
  else
  {
    alert('We can\'t play the game because you didn\'t input a yes or a no');
  }

  let questionFourGuess = prompt('Do I have a bake good cupcakes?').toLowerCase();
  if(questionFourGuess === 'y' || questionFourGuess === 'yes'){
    alert('You are correct! My cupcakes are great!');
    userCorrectGuesses++;
  } else if(questionFourGuess === 'n' || questionFourGuess === 'no'){
    alert('Sorry you are wrong, now I won\'t make you any cupcakes!');
  }
  else
  {
    alert('We can\'t play the game because you didn\'t input a yes or a no');
  }

  let questionFiveGuess = prompt('Do I have listen to music while I write code?').toLowerCase();
  if(questionFiveGuess === 'y' || questionFiveGuess === 'yes'){
    alert('You are correct! \\m/');
    userCorrectGuesses++;
  } else if(questionFiveGuess === 'n' || questionFiveGuess === 'no'){
    alert('Sorry you are wrong; I\'m listening to music as I write this.');
  }
  else
  {
    alert('We can\'t play the game because you didn\'t input a yes or a no');
  }
  alert(`Thank you for playing my game ${userName} I hope you learned more about me`);
} 



let winnerWinner = 'Thank you for playing the game; sorry you didn\'t win I\'ve been to 5 countries.';
let i = 1;
while(i<4)
{
  let questionSixGuess = Number(prompt('Guess how many countries I\'ve visited.')); // Aaron Clark helped me by telling me about the mumber() function
  if(questionSixGuess === 5)
  {
    winnerWinner = 'Thank you for playing the game; you were right I\'ve been to 5 countries.';
    userCorrectGuesses++;
    i=4;
  }
  else if(questionSixGuess > 5)
  {
    alert('I\'ve been to less countries than that. Guess again');
  }
  else if(questionSixGuess < 5)
  {
    alert('I\'ve been to more countries than that. Guess again');
  }
  else
  {
    alert('You used one of your guesses not guessing a number; you can\'t win if  you don\'t play fair.');
  }
  i++;
}
alert(winnerWinner);



let countriesIveVisited = ['germany', 'poland', 'iceland', 'ireland', 'canada'];
i = 0;
let userGuessCountries = 0;
while(i<6)
{
  let questionSevenGuess = prompt('I\'ve been to 5 countries aside from America. Guess which ones.').toLowerCase();
  for(let arrayI=0; arrayI<countriesIveVisited.length; arrayI++)
  {
    if(questionSevenGuess === countriesIveVisited[arrayI])
    {
      alert('That\'s one of them, keep going');
      userGuessCountries++;
    }
  }
  i++;
}
let winnerWinnerCountries = `Thank you for playing the game; you've guessed ${userGuessCountries} of the countries I've been to. I've visited  ${countriesIveVisited[0]} , ${countriesIveVisited[1]}, ${countriesIveVisited[2]}, ${countriesIveVisited[3]}, ${countriesIveVisited[4]}`;
alert(winnerWinnerCountries);

alert(`You've guessed ${userCorrectGuesses} of the 6 questions right and guessed ${userGuessCountries} of the 5 countries I've visited. Good for you.`)

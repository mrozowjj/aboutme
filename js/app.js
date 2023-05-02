'use strict';

// Used class example as a starting point: https://github.com/codefellows/seattle-code-201d100/blob/main/class-02/inclass-project-setup/js/app.js

console.log('hey world hey!');

// DONE: Ask the user their name through a prompt()

let userName = prompt('What\'s your name?');

console.log(userName);

// DONE: Display that name back to the user through a custom greeting welcoming them to your site.
alert(`Welcome to my site ${userName}! Let's play a guessing game, please answer yes/no OR y/n`);


// TODO: prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses

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

let questionOneGuess = prompt('Do I have a dog?').toLowerCase();

if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
  alert('Sorry you are wrong, I don\'t have a dog');
} else if(questionOneGuess === 'n' || questionOneGuess === 'no'){
  alert('You are correct!');
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
}
else
{
  alert('We can\'t play the game because you didn\'t input a yes or a no');
}


let questionThreeGuess = prompt('Do I like video games?').toLowerCase();

if(questionThreeGuess === 'y' || questionThreeGuess === 'yes'){
  alert('You are correct! I love video games!');
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
} else if(questionFiveGuess === 'n' || questionFiveGuess === 'no'){
  alert('Sorry you are wrong; I\'m listening to music as I write this.');
}
else
{
  alert('We can\'t play the game because you didn\'t input a yes or a no');
}



alert(`Thank you for playing my game ${userName} I hope you learned more about me`);



// TODO: Display the user’s name back to them in your final message to the user.

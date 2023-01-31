'use strict';

// Number box QS
let num = document.querySelector('.number');

// Msg QS
let msg = document.querySelector('.message');

// Score QS
let scr = document.querySelector('.score');

// Highscore QS
let highscr = document.querySelector('.highscore');

// Body QS
let body = document.querySelector('body');

// Guess Value QS
let guessQS = document.querySelector('.guess');

// Function to get a random number
function getRandomNum(){
  return Math.trunc(Math.random()*20) + 1;
}

// Set the random number as the secret number
let secretNumber = getRandomNum();

// Set score value as the value specified in html doc
let score = Number(scr.textContent);

// Set highscore as 0
let highscore = 0;

// Save default/current values in some variables as they would be used when we will click the again button
const defNum = num.textContent;
const defNumWidth = num.style.width;
const defMsg = msg.textContent;
const defScore = score;
const defBackColor = body.style.backgroundColor;
const defGuess = "";

// Check button functionality
document.querySelector('.check').addEventListener('click', function(){

  // Store the guess value in a variable
  const guess = Number(guessQS.value);

  // Handle the condition when guess is not a number
  if(!guess){
    msg.textContent = '⛔️ No number!';
  }

  // Handle the condition when guess is equal to secret number
  else if(guess === secretNumber){

    // Display the secret number
    num.textContent = secretNumber;

    // Set the width of num box to a greater width
    num.style.width = '30rem';

    // Display correct number msg on the screen
    msg.textContent = '🎉 Correct Number!';

    // Set a new background color for the body
    body.style.backgroundColor = '#60b347';

    // Set and display the value of highscore
    if(score > highscore){
      highscore = score;
      highscr.textContent = highscore;
    }

  } 

  // Handle the condition when guess is not equal to the secret number
  else if(guess !== secretNumber && score > 0){

    // Display respective msgs if guess value is greater or less than the secret number
    msg.textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';

    // Decrease the score
    scr.textContent = --score;

    // Display game lost msg if score becomes 0
    if(score == 0) 
      msg.textContent = '💥 You lost the game!';
  }
});

// Again button functionality
document.querySelector('.again').addEventListener('click', function(){

  // Sets all the values (except highscore) to the default values as specified above
  secretNumber = getRandomNum();
  num.textContent = defNum;
  num.style.width = defNumWidth;
  msg.textContent = defMsg;
  score = defScore;
  scr.textContent = score;
  body.style.backgroundColor = defBackColor;
  guessQS.value = defGuess;
});

'use strict';

// create and set random ninja's number on page
const ninjaNumber = Math.floor(Math.random() * 20) + 1;

// Get important DOM elements
const messageEl = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const gameScoreEl = document.querySelector('.score');
let gameScore = parseInt(gameScoreEl.textContent);

checkBtn.addEventListener('click', () => {
  const userGuess = parseInt(document.querySelector('.guess').value);
  console.log(userGuess);

  if (!userGuess) {
    messageEl.textContent = '⛔ No number selected!';
  } else if (userGuess === ninjaNumber) {
    document.querySelector('.number').textContent = ninjaNumber;
    messageEl.textContent = "🥳 You guessed the Ninjas's number! 🥷";
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.color = '#de0500';
    document.body.style.background = `    
    linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)
`;

    document.body.style.backgroundSize = 'cover';
  } else if (userGuess > ninjaNumber) {
    if (gameScore > 1) {
      messageEl.textContent = '☝️ Guess was too high!';
      gameScore--;
      gameScoreEl.textContent = gameScore;
    } else {
      messageEl.textContent = "You lost the Ninja's Game 💀!";
      gameScore--;
      gameScoreEl.textContent = gameScore;
    }
  } else if (userGuess < ninjaNumber) {
    if (gameScore > 1) {
      messageEl.textContent = '👇 Guess was too low!';
      gameScore--;
      gameScoreEl.textContent = gameScore;
    } else {
      messageEl.textContent = "You lost the Ninja's Game 💀!";
      gameScore--;
      gameScoreEl.textContent = gameScore;
    }
  }
});

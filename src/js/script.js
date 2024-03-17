'use strict';

// create and set random ninja's number on page
let ninjaNumber = Math.floor(Math.random() * 20) + 1;

// Get important DOM elements
const messageEl = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const gameScoreEl = document.querySelector('.score');
const againBtn = document.querySelector('.again');
const ninjaNumberEl = document.querySelector('.number');
const highScoreEl = document.querySelector('.highscore');
const userGuessEl = document.querySelector('.guess');
let gameScore = parseInt(gameScoreEl.textContent);

checkBtn.addEventListener('click', () => {
  const userGuess = parseInt(userGuessEl.value);
  console.log(userGuess);

  if (!userGuess) {
    messageEl.textContent = '⛔ No number selected!';
  } else if (userGuess === ninjaNumber) {
    parseInt(highScoreEl.textContent) > gameScore
      ? (highScoreEl.textContent = highScoreEl.textContent)
      : (highScoreEl.textContent = gameScore);
    ninjaNumberEl.textContent = ninjaNumber;
    messageEl.textContent = "🥳 You guessed the Ninjas's number! 🥷";
    ninjaNumberEl.style.width = '30rem';
    ninjaNumberEl.style.color = '#de0500';
    againBtn.style.backgroundColor = '#de0500';
    againBtn.style.color = '#fff';
    document.body.style.background = `    
    linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)
`;

    document.body.style.backgroundSize = 'cover';
  } else if (userGuess !== ninjaNumber) {
    if (gameScore > 1) {
      messageEl.textContent =
        userGuess > ninjaNumber
          ? '☝️ Guess was too high!'
          : '👇 Guess was too low!';
      gameScore--;
      gameScoreEl.textContent = gameScore;
    } else {
      messageEl.textContent = "You lost the Ninja's Game 💀!";
      gameScore--;
      gameScoreEl.textContent = gameScore;
    }
  }
});

againBtn.addEventListener('click', () => {
  ninjaNumber = Math.floor(Math.random() * 20) + 1;
  gameScore = 20;
  gameScoreEl.textContent = gameScore;
  messageEl.textContent = 'Start guessing...';
  ninjaNumberEl.textContent = '?';
  ninjaNumberEl.style.color = '#222';
  ninjaNumberEl.style.width = '15rem';
  userGuessEl.value = '';
  document.body.style.background = '#222';
  againBtn.style.backgroundColor = '#fff';
  againBtn.style.color = '#222';
});

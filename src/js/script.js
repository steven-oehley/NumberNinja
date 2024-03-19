'use strict';

// generate random num function
function getRandomNum() {
  return Math.floor(Math.random() * 20) + 1;
}

// create and set random ninja's number on page
let ninjaNumber = getRandomNum();

// Get important DOM elements
const messageEl = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const gameScoreEl = document.querySelector('.score');
const againBtn = document.querySelector('.again');
const ninjaNumberEl = document.querySelector('.number');
const highScoreEl = document.querySelector('.highscore');
const userGuessEl = document.querySelector('.guess');
let gameScore = parseInt(gameScoreEl.textContent);

function setContent(element, content) {
  element.textContent = content;
}

function applyStyle(element, styleType, styleProperty) {
  if (element === document.body) {
    document.body.style[styleType] = styleProperty;
  } else {
    element.style[styleType] = styleProperty;
  }
}

checkBtn.addEventListener('click', () => {
  const userGuess = parseInt(userGuessEl.value);
  console.log(userGuess);

  if (!userGuess) {
    setContent(messageEl, '⛔ No number selected!');
  } else if (userGuess === ninjaNumber) {
    parseInt(highScoreEl.textContent) > gameScore
      ? (highScoreEl.textContent = highScoreEl.textContent)
      : (highScoreEl.textContent = gameScore);

    setContent(ninjaNumberEl, ninjaNumber);
    setContent(messageEl, "🥳 You guessed the Ninjas's number! 🥷");

    applyStyle(ninjaNumberEl, 'width', '30rem');
    applyStyle(ninjaNumberEl, 'color', '#de0500');
    applyStyle(againBtn, 'backgroundColor', '#de0500');
    applyStyle(againBtn, 'color', '#fff');
    applyStyle(
      document.body,
      'background',
      `
    linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)
`
    );
    applyStyle(document.body, 'backgroundSize', 'cover');
  } else if (userGuess !== ninjaNumber) {
    if (gameScore > 1) {
      let message =
        userGuess > ninjaNumber
          ? '☝️ Guess was too high!'
          : '👇 Guess was too low!';
      setContent(messageEl, message);
      gameScore--;
      setContent(gameScoreEl, gameScore);
    } else {
      setContent(messageEl, "You lost the Ninja's Game 💀!");
      gameScore--;
      setContent(gameScoreEl, gameScore);
    }
  }
});

againBtn.addEventListener('click', () => {
  ninjaNumber = getRandomNum();
  gameScore = 20;
  gameScoreEl.textContent = gameScore;
  setContent(gameScoreEl, gameScore);
  setContent(messageEl, 'Start guessing...');
  setContent(ninjaNumberEl, '?');
  applyStyle(ninjaNumberEl, 'color', '#222');
  applyStyle(ninjaNumberEl, 'width', '15rem');
  userGuessEl.value = '';
  applyStyle(document.body, 'background', '#222');
  applyStyle(againBtn, 'backgroundColor', '#fff');
  applyStyle(againBtn, 'color', '#222');
});

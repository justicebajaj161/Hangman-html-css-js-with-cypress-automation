const hangmanParts = document.querySelectorAll('.hangman > div');
const wordDisplay = document.getElementById('wordDisplay');
const guessesDisplay = document.getElementById('guesses');
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');

const words = ['javascript', 'programming', 'hangman', 'developer', 'openai', 'react' , 'node', 'express'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let remainingAttempts = 6;

function updateHangmanDisplay() {
  hangmanParts.forEach((part, index) => {
    part.style.display = index < (6 - remainingAttempts) ? 'block' : 'none';
  });
}

function displayWord() {
  wordDisplay.textContent = selectedWord
    .split('')
    .map(letter => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');
}

function updateGuessesDisplay() {
  guessesDisplay.textContent = `${guessedLetters.join(', ')}`;
}

function setWinBackgroundColor() {
  document.body.style.backgroundColor = 'green';
}

function setLossBackgroundColor() {
  document.body.style.backgroundColor = 'red';
}


function checkWin() {
  if (selectedWord.split('').every(letter => guessedLetters.includes(letter))) {
    wordDisplay.textContent = 'Congratulations! You won!';
    guessInput.disabled = true;
    guessButton.disabled = true;
    setWinBackgroundColor(); // Set background color to green
  }
}

function checkLoss() {
  if (remainingAttempts <= 0) {
    wordDisplay.textContent = 'Game over! You lost.';
    guessInput.disabled = true;
    guessButton.disabled = true;
    setLossBackgroundColor();
  }
}

function guessLetter() {
  const letter = guessInput.value.toLowerCase();

  if (letter && !guessedLetters.includes(letter)) {
    guessedLetters.push(letter);
    if (!selectedWord.includes(letter)) {
      remainingAttempts--;
      updateHangmanDisplay();
    }
  }

  displayWord();
  updateGuessesDisplay();
  checkWin();
  checkLoss();

  guessInput.value = '';

  if (remainingAttempts > 0 && !wordDisplay.textContent.includes('Congratulations')) {
    guessInput.focus();
  }
}

displayWord();
updateGuessesDisplay();
updateHangmanDisplay();

guessButton.addEventListener('click', guessLetter);
guessInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    guessLetter();
  }
});
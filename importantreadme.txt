1. Guidelines:
Word Selection: The game should select a word for the player to guess. 

Display Underscores: At the start, the displayed word should be represented by underscores for each letter in the word.

Guessing:

The player should be able to guess a letter by typing it into an input field.
Clicking a button or pressing the "Enter" key should submit the guess.
Correct guesses should reveal the letter in the word display.
Incorrect guesses should show parts of the hangman.
Winning and Losing:

If the player correctly guesses all the letters in the word, they win.
If the player makes 6 incorrect guesses, they lose.
The game should display a victory or loss message accordingly.
The background color of the page should turn green upon winning and red upon losing.
Disable Input: After a win or loss, the input field and the guess button should be disabled.

Bonus: Consider adding features like a restart button, hints, sound effects, or animations to enhance the game.

['javascript', 'programming', 'hangman', 'developer', 'openai', 'react' , 'node', 'express']  this should be the mandatory words in the array
you are free to add more of your own as well .

If the letter is part of the word , the word should in a display we will show it in are sample video , and the id in it should be #wordDisplay

Now ofcourse in order to do that you will also have to guess a word somewhere and that should be in guess input with id #guessInput

Once you enter the guess word , you should press a guess button and it should have id of #guessButton

the body parts of the hangman should appear part by parts if the guessed letter is wrong 
 <div class="hangman-container">
    <div class="hangman">
      <div class="head"></div>
      <div class="body"></div>
      <div class="left-arm"></div>
      <div class="right-arm"></div>
      <div class="left-leg"></div>
      <div class="right-leg"></div>
    </div>
  </div>

  this should be used as we can see there are six body parts, the head should appear first if the guessed word is wrong 

  The page start with wordDisplay containing _ for each letter 

  When you lose the game the background not just turn red but also wordDisplay should have have text Game over! You lost

  When you win the game the background not just turn green but also wordDisplay should have have text Congratulations! You won!


  Here is a short video demonstration , make is much similar as possible , even th UI . 
  
  https://files.codingninjas.in/hangman-30308.mkv


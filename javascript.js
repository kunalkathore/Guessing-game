/* Guess the Number Game */

let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

/* Function to check the user's guess against the random number */
 
function checkGuess() {
  let guessedNumber = parseInt(userInput.value);
  if (guessedNumber > randomNumber) {
    gameResult.textContent = "Too High! Try Again.";
    gameResult.style.backgroundColor = "#1e217c";
  }

  /* Check if the guessed number is less than the random number */

  else if (guessedNumber < randomNumber) {
    gameResult.textContent = "Too Low! Try Again.";
    gameResult.style.backgroundColor = "#1e217c";
  }

  /* Check if the guessed number is equal to the random number */

  else if (guessedNumber === randomNumber) {
    gameResult.textContent = "Congratulations! You got it right.";
    gameResult.style.backgroundColor = "green";
  }

  /* Check if the input is not a number or is out of range */
  
  else {
    gameResult.textContent = "Please provide a valid input.";
    gameResult.style.backgroundColor = "#1e217c";
  }
}
const prompt = require('prompt-sync')({sigint: true});

function guessingGame (){
  // Random number from 1 - 100
  let numberInMind = Math.floor(Math.random() * 100) + 1;


  // This variable is used to determine if the app should continue prompting the user for input
  let foundCorrectNumber = false;

 
  while (!foundCorrectNumber) {
  // Step 1: Get user input (don't forget that the input is a string)
      const guess = parseInt(prompt("Guess a number between 1 - 100: "))
  

  // Step 2: Compare the guess to the secret answer and
  // let the user know the feedback (too large, too small, correct).
      if (isNaN(guess)){
    console.log("Please enter a number.")
    } 
    else if (guess < numberInMind){
    console.log("Your guess is too low.")
    } 
    else if (guess > numberInMind){
    console.log("Your guess is too high.")
    } 
    else {
    console.log("You guessed the correct number!")
    foundCorrectNumber = true
    }
  
  }
  let playAgain = prompt("Do you want to play the game again? (yes/no): ")//Ask user to play if they want to play again.
  if (playAgain === "yes"){
    guessingGame()
  } else {
    console.log("Thanks for playing!")
  }
}

guessingGame();


"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// const guessVal = function () {
//   console.log(document.querySelector(".guess").value);
// };

// document.querySelector(".check").addEventListener("click", guessVal);

const scoreMessage = document.querySelector(".score");
const displayNumber = document.querySelector(".number");
const body = document.querySelector("body");
const guessInput = document.querySelector(".guess");
const displayHighscore = document.querySelector(".highscore");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(guessInput.value);

  //   When there is no input
  if (!guess) {
    displayMessage("No number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    displayNumber.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    displayNumber.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      displayHighscore.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   displayMessage.textContent = guess > secretNumber ? "Too high!" : "Too low!";
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      scoreMessage.textContent = score;
    } else {
      displayMessage("You lost the game!");
      scoreMessage.textContent = 0;
    }
  }

  // When guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       displayMessage.textContent = "Too high!";
  //       score--;
  //       scoreMessage.textContent = score;
  //     } else {
  //       displayMessage.textContent = "You lost the game!";
  //       scoreMessage.textContent = 0;
  //     }

  //     // When guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       displayMessage.textContent = "Too low!";
  //       score--;
  //       scoreMessage.textContent = score;
  //     } else {
  //       displayMessage.textContent = "You lost the game!";
  //       scoreMessage.textContent = 0;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreMessage.textContent = score;
  displayMessage("Start guessing...");
  displayNumber.textContent = "?";
  displayNumber.style.width = "15rem";
  body.style.backgroundColor = "#222";
  guessInput.value = "";
});

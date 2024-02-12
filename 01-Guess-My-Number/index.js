"use strict"

const nbrToGuess = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value)
  if (!guess) {
    displayMessage("No number")
  } else if (guess === nbrToGuess) {
    displayMessage("Correct number")
    document.querySelector(".number").textContent = nbrToGuess

    document.querySelector("body").style.backgroundColor = "#60b347"
    document.querySelector(".number").style.width = "30rem"

    if (score > highscore) {
      highscore = score
      document.querySelector(".highscore").textContent = highscore
    }
  } else if (guess !== nbrToGuess) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > nbrToGuess ? "Too high" : "Too low"
      score--
      document.querySelector(".score").textContent = score
    } else {
      displayMessage("You lost the game")
      document.querySelector(".score").textContent = 0
    }
  }
})

document.querySelector(".again").addEventListener("click", function () {
  score = 20
  nbrToGuess = Math.trunc(Math.random() * 20) + 1

  displayMessage("?")
  document.querySelector(".number").textContent = "?"
  document.querySelector(".message").textContent = "Start guessing"
  document.querySelector(".guess").value = ""
  document.querySelector(".score").textContent = score

  document.querySelector("body").style.backgroundColor = "#222"
  document.querySelector(".number").style.width = "15rem"
})

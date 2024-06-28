'use strict'

//~ DOM MANIPULATIONS

// DOM: Document Object Model: structured representation of HTML documents. Allow javascript to access html elements and styles to manipulate them.

// DOM !== JavaScript (ecma)
// DOM is Web API is provided by web browsers. It allows JavaScript to interact with HTML and CSS. It provides methods to create, remove, and modify HTML elements.

// Theres are a lot more web api like Fetch API, Web Storage API, Timers etc.

// selecting html elements
/*
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Correct number 🎉'

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value) */

const secretNumber = Math.trunc(Math.random() * 20) + 1
document.querySelector('.number').textContent = secretNumber

let score = 20

// handliging events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!'
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number 🎉'
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high! 📈'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 🥲'
      document.querySelector('.score').textContent = 0
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low! 📉'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 🥲'
      document.querySelector('.score').textContent = 0
    }
  }
})

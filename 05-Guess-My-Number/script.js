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

const againBtn = document.querySelector('.again')
const checkBtn = document.querySelector('.check')

const scoreEl = document.querySelector('.score')
const highscoreEl = document.querySelector('.highscore')

const messageEl = document.querySelector('.message')
const bodyEl = document.querySelector('body')
const numberEl = document.querySelector('.number')
const guessEl = document.querySelector('.guess')

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

// handliging events
checkBtn.addEventListener('click', function () {
  const guess = Number(guessEl.value)

  if (!guess) {
    // when player doesn't enter a number
    messageEl.textContent = '⛔ No number!'

    // when player wins
  } else if (guess === secretNumber) {
    messageEl.textContent = 'Correct number 🎉'
    numberEl.textContent = secretNumber

    bodyEl.style.backgroundColor = 'var(--color-win)'
    numberEl.style.inlineSize = '30rem'

    if (score > highscore && messageEl.textContent === 'Correct number 🎉') {
      highscore = score
      highscoreEl.textContent = highscore
    }

    // guess out of range
  } else if (guess > 20 || guess < 1) {
    messageEl.textContent = '⛔ Number out of range!'

    // guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      messageEl.textContent = 'Too high! 📈'
      score--
      scoreEl.textContent = score
    } else {
      messageEl.textContent = 'You lost the game! 🥲'
      scoreEl.textContent = 0
    }

    // guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      messageEl.textContent = 'Too low! 📉'
      score--
      scoreEl.textContent = score
    } else {
      messageEl.textContent = 'You lost the game! 🥲'
      scoreEl.textContent = 0
    }
  }
})

againBtn.addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1

  messageEl.textContent = 'Start guessing...'
  numberEl.textContent = '?'
  scoreEl.textContent = score
  guessEl.value = ''

  numberEl.style.inlineSize = '15rem'
  bodyEl.style.backgroundColor = 'var(--color-bcg-default)'
})

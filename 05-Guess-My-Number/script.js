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

const againBtnEl = document.querySelector('.again')
const checkBtnEl = document.querySelector('.check')

const scoreEl = document.querySelector('.score')
const highscoreEl = document.querySelector('.highscore')

const messageEl = document.querySelector('.message')
const numberEl = document.querySelector('.number')
const guessEl = document.querySelector('.guess')

const bodyEl = document.querySelector('body')

const displayScore = score => (scoreEl.textContent = score)
const displayHighscore = highscore => (highscoreEl.textContent = highscore)

const displayMessage = message => (messageEl.textContent = message)
const displayNumber = number => (numberEl.textContent = number)
const displayGuess = guess => (guessEl.value = guess)

const styleNumberEl_Width = style => (numberEl.style.width = style)
const styleBodyEl_BcgColor = style => (bodyEl.style.backgroundColor = style)

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

// handliging events
checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessEl.value)

  if (!guess) {
    // when player doesn't enter a number
    displayMessage('⛔ No number!')

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number 🎉')
    displayNumber(secretNumber)

    styleBodyEl_BcgColor('var(--color-win)')
    styleNumberEl_Width('30rem')

    if (score > highscore && messageEl.textContent === 'Correct number 🎉') {
      highscore = score
      displayHighscore(highscore)
    }

    // guess out of range
  } else if (guess > 20 || guess < 1) {
    displayMessage('⛔ Number out of range!')

    // guess is too high or too low
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉')

    if (score > 1) {
      score--
      displayScore(score)
    } else {
      displayMessage('You lost the game! 🥲')
      displayScore(0)
    }
  }
})

againBtnEl.addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1

  displayMessage('Start guessing...')
  displayNumber('?')
  displayScore(score)
  displayGuess('')

  styleNumberEl_Width('15rem')
  styleBodyEl_BcgColor('var(--color-bcg-default)')

  // for testing purposes
  // bodyEl.style.cssText += 'color: red !important'
})

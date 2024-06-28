'use strict'

// selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')

const diceEl = document.querySelector('.dice')

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// starting conditions
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

let activePlayer = 0
let currentScore = 0
const scores = [0, 0]
let playing = true

const switchPlayer = () => {
  currentScore = 0
  document.querySelector(`#current--${activePlayer}`).textContent = currentScore
  activePlayer = activePlayer === 0 ? 1 : 0
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')
}

// rolling dice functionality
btnRoll.addEventListener('click', () => {
  // check is game over or not
  if (playing) {
    // 1. generation a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1

    // 2. display the dice
    diceEl.classList.remove('hidden')
    diceEl.src = `./img/dice-${dice}.png`

    // 3. check for rolled 1
    if (dice !== 1) {
      // add dice to the current score
      currentScore += dice

      document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    } else {
      // switch to next player
      switchPlayer()
    }
  }
})

btnHold.addEventListener('click', () => {
  // check is game over or not
  if (playing) {
    // add current score to active player score
    scores[activePlayer] += currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]

    // check if score >= 100
    if (scores[activePlayer] >= 30) {
      // finish the game
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
      diceEl.classList.add('hidden')
      playing = false
    } else {
      // switch to next player
      switchPlayer()
    }
  }
})

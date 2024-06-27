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

// handliging events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(typeof guess, guess)

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!'
  }
})

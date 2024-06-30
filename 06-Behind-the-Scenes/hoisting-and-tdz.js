'use strict'

//_ Variables
console.log(me)
// console.log(job)
// console.log(year)

var me = 'Artem'
let job = 'programmer'
const year = 1997

//_ Functions
console.log(addDecl(2, 3)) // function declaratioon can accessed before initialization (because of hoisting)
// console.log(addExpr(2, 3)) // if var, error massage: addExpr is not a function (becase var in hoisting is undefined)
// console.log(addArrow(2, 3)) // const/let cannot access before initialization

function addDecl(a, b) {
  return a + b
}

/*
const addExpr = function (a, b) {
  return a + b
} */
var addExpr = function (a, b) {
  return a + b
}

const addArrow = (a, b) => a + b
// var addArrow = (a, b) => a + b

//_ Example
console.log(numProducts) // undefined
console.log(!undefined) // true
if (!numProducts) deleteShoppingCart()

var numProducts = 10
function deleteShoppingCart() {
  console.log('All products deleted')
}

//_ Example

var x = 1
let y = 2
const z = 3

console.log(window)
console.log(window.x === x) // true
console.log(window.y === y) // false
console.log(window.z === z) // false

// for testing purposes
window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    document.querySelector('body').style.background = 'red'
  } else {
    document.querySelector('body').style.background =
      'linear-gradient(to top left, hsl(161deg 64% 43%), hsl(112deg 55% 64%))'
  }
})

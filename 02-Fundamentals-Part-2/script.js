//~ STRICT MODE START

'use strict'

// strict mode is enabled by default in modern JavaScript ES5+
// strict mode prevents certain actions from being taken, such as using undeclared variables

let hasDriversLicense = false
const passTest = true

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log(`I can drive!`)

// reserved words cannot be used as variable names, 'strict mode' will throw an error
// const private = 'Audio'
// const interface = 'Audio'

//~ STRICT MODE END

//~ FUNCTIONS START
// DRY PRINCIPLE: Don't Repeat Yourself (DRY) is a coding principle that encourages writing code that is easier to read, understand, and maintain.

// functions allow us to group related code together and reuse it
// function is a block of code that performs a specific task
function logger(message) {
  console.log(`My name is Artem`)
}

// invoking, running or calling a function
logger()
logger(23)
// logger()

// function declaration
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges)
  const juice = `Juice with ${apples} apples and ${oranges} oranges`
  // return the result of the function so we can use it later
  return juice
}

// call the function and store the result in a variable
const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleAndOrangeJuice = fruitProcessor(2, 4)
console.log(appleAndOrangeJuice)

//~ FUNCTION END

//~ FUNCTION DECLARATION VS FUNCTION EXPRESSION START

// function declaration can be used before they are defined, this process called hoisting
const age1 = calcAge1(1997)

// function declaration
function calcAge1(birthYear) {
  return 2024 - birthYear
}
console.log(age1)

// function expression produce a value to be stored in a variable
// anonymous function is a function without a name
const calcAge2 = function (birthYear) {
  return 2024 - birthYear
}
const age2 = calcAge2(1997)
console.log(age1, age2)

// better use function expression for better readability and reusability

//~ FUNCTION DECLARATION VS FUNCTION EXPRESSION END

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
// function exits immediately after returning the result
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

//~ ARROW FUNCTIONS START

// arrow functions are a shorter syntax for writing function expressions
// arrow functions returns the result of the expression inside the function automatically
const calcAge3 = (birthYear) => 2024 - birthYear
const age3 = calcAge3(1997)
console.log(age3)

// arrow function with multiple parameters and a return statement
// need return keyword to return a value if the function has more than one line
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear
  const retirement = 65 - age
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1997, 'Artem'))
console.log(yearsUntilRetirement(1984, 'Igor'))

// arrow function has a differences from regular function expressions, they have no 'this' keyword

//~ ARROW FUNCTIONS END

//~ FUNCTIONS CALLING OTHER FUNCTIONS START

function cutFruitPieces(fruit) {
  return fruit * 4
}

function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples)
  const orangePieces = cutFruitPieces(oranges)
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`
  return juice
}

console.log(fruitProcessor2(2, 3))

//~ FUNCTIONS CALLING OTHER FUNCTIONS END

//~ REVIEWING FUNCTIONS START

// function paramets is local to each function
const calcAge = function (birthYear) {
  return 2024 - birthYear
}

const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge(birthYear)
  const retirement = 65 - age

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`)
    return retirement
  } else {
    console.log(`${firstName} is already retired 🎉`)
    return -1
  }
}

console.log(yearsUntilRetirement2(1997, 'Artem'))
console.log(yearsUntilRetirement2(1950, 'Mike'))

// function has a name, parameters, and a body

// parameters: placeholders for data that will be provided when the function is called, like local variables in functions

// body: block of code that performs a specific task that we want to reuse. Processes the data and returns the result

// return statement: exits the function and sends a value back to the caller

// calling, running or invoking a function, using parentheses and passing the required arguments

// arguments: actual values of function parameters, to provide data to the function

// variable to save returned values (function output)

//~ REVIEWING FUNCTIONS END

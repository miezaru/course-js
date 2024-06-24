let js = 'amazing'
console.log(40 + 8 + 23 - 10)

console.log('Nika')
console.log(21)

// declaring a variable (a box) in camelCase syntax
let firstName = 'Nika'
console.log(firstName)

//~ VARIABLE NAME CONVENTIONS START

// varibales can only contain numbers, letters, undescores or a dollar sign
// let 3years = 3

// variable can`t start with a number and use reserve js keywords
// let function = 27
let name = 'Artem' // name also reserved but allowed to use (in some cases creates problems)

// not starts with uppercase letter, its convention
let Person = 'Nika'

// constants in uppercase
let PI = 3.1415

let myFirstJob = 'Programmer'
let myCurrentJob = 'Teacher'

let job1 = 'Programmer'
let job2 = 'Teacher'

console.log(myFirstJob)

//~ VARIABLE NAME CONVENTIONS END

//~ DATA TYPES START

// typeof
console.log(typeof true) // boolean
console.log(typeof 2) // number
console.log(typeof 'Nika') // string (always use single or double quotes)
console.log(typeof undefined) // undefined
console.log(typeof null) // object (bug, error), should returned null

let javaScriptIsFun = true
console.log(javaScriptIsFun, typeof javaScriptIsFun) // true, 'boolean'
javaScriptIsFun = 'Yes'
console.log(javaScriptIsFun, typeof javaScriptIsFun) // Yes, string

let year
console.log(year, typeof year)

year = 1997
console.log(year, typeof year)

//~ DATA TYPES END

//~ LET, CONST AND VAR START

// GOOD PRACTIVE - to have as little variable mutations as possible (always use const, change to let if needed, var completely avoided)

// let, var - mutating variables
let age = 30
age = 31

// const - immutable variable
// const birthYear = 1997
// birthYear = 1998
// console.log(birthYear) // TypeError: Assigment to constant variable.
let birthYear = 1997

// const job; // SyntaxError: need initial value

// var job = 'programmer'
let job
job = 'teacher'

// never write variables w/o declared it
let lastName = 'Sein'
console.log(lastName)

//~ LET, CONST AND VAR END

// ~ BASIC OPERATORS START

// math operators
const now = 2042
const ageNika = now - 1997
const ageSarah = now - 2018
console.log(ageNika, ageSarah, typeof ageNika, typeof ageSarah)

console.log(ageNika * 2, ageNika / 2, ageSarah / 10, 2 ** 3) // 90 22.5 2.4 8
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

// const firstName = 'Nika'
lastName = 'Sine'
// concatination
console.log(firstName + ' ' + lastName) // Nika Sine

// assignment operator
let x = 10 + 5 // 15
console.log(x)
x += 10 // x = x + 10
console.log(x)
x *= 4
console.log(x) // 100
x /= 5
console.log(x) // 20
x++
console.log(x) // 21
x--
x--
console.log(x) // 19

// comparison operators
// >, >=, <, <=
console.log(ageNika > ageSarah) // true
console.log(ageNika < ageSarah) // flase
console.log(ageSarah >= 24) // true, Sarah age is 24

const isFullAge = ageSarah >= 24

// what first? ---> operator precedence
console.log(now - 1997 > now - 2018)

//~ BASIC OPERATORS END

//~ OPERATOR PRECEDENCE START

console.log(25 - 10 - 5)

let w, y
w = y = 25 - 10 - 5 // 10
console.log(x, y) // 10 10, x = y = 10, y = 10, x = 10
const averageAge = (ageNika + ageSarah) / 2
console.log(ageNika, ageSarah, averageAge)

//~ OPERATOR PRECEDENCE END

//~ STRINGS AND TEMPLATE LITERALS START

job = 'programmer'
birthYear = 1997
year = 2037

// old way
const artem = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'
console.log(artem)

// template literals (ES6) - more readable and efficient
const artemNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(artemNew)

// use backticks always
console.log(`Just a regular string...`)
// use backticks for multiline strings

console.log(
  'String with \n\
multiple \n\
lines)'
)

console.log(
  `String
multiple
lines`
)

//~ STRING AND TEMPLATE LITERALS END

//~ TAKING DECISIONS: IF/ELSE STATEMENTS START

age = 19
// const isOldEnough = age >= 18

// if/else statement
if (age >= 18) {
  console.log(`Sarah can start driving license 🚗`)
} else {
  // else block is optional
  const yearsLeft = 18 - age
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

// need to declare variable outside of if/else block
let century
if (birthYear < 2000) {
  century = 20
} else {
  century = 21
}
console.log(century)

//~ TAKING DECISIONS: IF/ELSE STATEMENTS END

//~ TYPE CONVERSION AND COERCION START

// type conversion
const inputYear = '1997'
console.log(inputYear + 18) // concatenates string and number
console.log(Number(inputYear), inputYear) // converts string to number
console.log(Number(inputYear) + 18) // adds number

console.log(Number('artem')) // NaN (Not a Number)
console.log(typeof NaN) // number

console.log(String(23), 23) // '23' 23

// type coercion
console.log('I am ' + 23 + ' years old') // 'I am 23 years old'
console.log('I am ' + '23' + ' years old') // 'I am 23 years old'
console.log('I am ' + String(23) + ' years old') // 'I am 23 years old'

console.log('23' - '10' - 3) // 10
console.log('23' + '10' + 3) // '23103'
console.log('23' * '2') // 46
console.log('23' / '2') // 11.5

let n = '1' + 1
n = n - 1
console.log(n) // 10

console.log(2 + 3 + 4 + '5') // '95'
console.log('10' - '4' - '3' - 2 + '5') // '15'

//~ TYPE CONVERSION AND COERCION END

//~ TRUTHY AND FALSY VALUES START

console.log(`5 falsy values: 0, '', undefined, null, NaN`)
console.log(`Boolean(0)`, Boolean(0)) // false
console.log(`Boolean('')`, Boolean('')) // false
console.log(`Boolean(undefined)`, Boolean(undefined)) // false
console.log(`Boolean(null)`, Boolean(null)) // false
console.log(`Boolean(NaN)`, Boolean(NaN)) // false
console.log(`boolean conversion is only implicit not explicit`)
console.log(`Boolean({})`, Boolean({})) // true
console.log(`Boolean([])`, Boolean([])) // true
console.log(`Boolean('Artem')`, Boolean('Artem')) // true

const money = 100
// 0 convertion to a boolean is false
if (money) {
  console.log(`Don't spend it all`)
} else {
  console.log(`You should get a job!`)
}

let height = 0
if (height) {
  console.log(`YAY! Height is defined`)
} else {
  console.log(`Height is UNDEFINED or FALSY value`)
}

//~ TRUTHY AND FALSY VALUES END

//~ EQUALITY OPERATORS: == VS === START

age = 18
if (age === 18) console.log(`You just became an adult!`)
console.log(`18 === 18`, 18 === 18) // true
console.log(`18 == '18' (loose)`, 18 == '18') // true
console.log(`18 === '18' (strict)`, 18 === '18') // false

// prompt returns a string, so we need to convert it to number
// const favouriteNumber = Number(prompt(`What's your favourite number?`))
const favouriteNumber = 23
console.log(favouriteNumber, typeof favouriteNumber)

if (favouriteNumber === 21) {
  console.log(`Cool! 21 is an amazing number!`)
} else if (favouriteNumber === 7) {
  console.log(`7 is also a cool number!`)
} else {
  console.log(`Number is not 21 or 7. Number is ${favouriteNumber}`)
}

if (favouriteNumber !== 21) console.log(`Why not 21?`)

//~ EQUALITY OPERATORS: == VS === END

//~ BOOLEAN LOGIC START

// boolean logic examples
console.log(`true && true`, true && true) // true
console.log(`true && false`, true && false) // false
console.log(`false && true`, false && true) // false
console.log(`false && false`, false && false) // false
console.log(`!true`, !true) // false
console.log(`!false`, !false) // true
console.log(`true || true`, true || true) // true
console.log(`true || false`, true || false) // true
console.log(`false || true`, false || true) // true
console.log(`false || false`, false || false) // false
console.log(`(3 > 2) && (5 < 4)`, 3 > 2 && 5 < 4) // false
console.log(`(3 > 2) || (5 < 4)`, 3 > 2 || 5 < 4) // true
console.log(`!(3 > 2) && (5 < 4)`, !(3 > 2) && 5 < 4) // true
console.log(`----------  ----------`)
console.log(`---------- ----------`)

//~ BOOLEAN LOGIC END

//~ LOGICAL OPERATORS START

// && (AND) operator
// || (OR) operator
const hasDriversLicense = true // A
const hasGoodVision = true // B
console.log(`hasDriversLicence && hasGoodVision`, hasDriversLicense && hasGoodVision) // true
console.log(`hasDriversLicence || hasGoodVision`, hasDriversLicense || hasGoodVision) // true
console.log(`!hasDriversLicense`, !hasDriversLicense) // false

const shouldDrive = hasDriversLicense && hasGoodVision
console.log(`Should drive?`, shouldDrive) // true
if (shouldDrive) {
  console.log(`Sarah is able to drive!`)
} else {
  console.log(`Someone else should drive!`)
}

const isTired = false // C
console.log(
  `hasDriversLicence || hasGoodVision || isTired`,
  hasDriversLicense || hasGoodVision || isTired
) // true
console.log(
  `hasDriversLicence && hasGoodVision && isTired`,
  hasDriversLicense && hasGoodVision && isTired
) // true

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive!`)
} else {
  console.log(`Someone else should drive...`)
}

//~ LOGICAL OPERATORS END

//~ THE SWITCH STATEMENT START

const day = 'wednesday'
switch (day) {
  case 'monday': // day === 'monday
    console.log(`Plan course structure`)
    console.log(`Go to coding meetup`)
    // w/o break statement, it will continue to the next case
    break
  case 'tuesday':
    console.log(`Prepare theory videos`)
    break
  case 'wednesday':
  case 'thursday':
    console.log(`Write code examples`)
    break
  case 'friday':
    console.log(`Record videos`)
    break
  case 'saturday':
  case 'sunday':
    console.log(`Enjoy the weekend!`)
    break
  default:
    console.log(`Not a valid day!`)
}

if (day === 'monday') {
  console.log(`Plan course structure`)
  console.log(`Go to coding meetup`)
} else if (day === 'tuesday') {
  console.log(`Prepare theory videos`)
} else if (day === 'wednesday' || day === 'thursday') {
  console.log(`Write code examples`)
} else if (day === 'friday') {
  console.log(`Record videos`)
} else if (day === 'saturday' || day === 'sunday') {
  console.log(`Enjoy the weekend!`)
} else console.log(`Not a valid day!`)

//~ THE SWITCH STATEMENT END

//~ STATEMENTS AND EXPRESSIONS START

// expression examples, produce value
console.log(2 + 3) // -> 5
console.log(5 - 3) // -> 2
console.log(3 * 4) // -> 12
console.log(10 / 2) // -> 5
console.log(10 % 3) // -> 1
console.log('Hello' + ' ' + 'World') // -> Hello World
// statement examples
if (23 > 10) {
  const str = `23 is greater than 10`
}
console.log('---------- STATEMENTS AND EXPRESSIONS END ----------')
console.log(`---------- CONDITIONAL (TERNARY) OPERATOR START ----------`)
age = 21
// ternary operator is like an if-else statement but shorter and in one line
age >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink water 💧`)

// we can store the result of the ternary operator in a variable because it's an expression
const drink = age >= 18 ? 'wine 🍷' : 'water 💧'
console.log(drink)

let drink2
if (age >= 18) {
  drink2 = 'wine 🍷'
} else {
  drink2 = 'water 💧'
}
console.log(drink2)
// ternary operator cool for quick desitions
// because ternary operator is an expression, we can use it in a function call and string interpolation
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`)

//~ CONDITIONAL (TERNARY) OPERATOR END

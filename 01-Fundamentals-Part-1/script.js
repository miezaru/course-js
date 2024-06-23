let js = 'amazing'
console.log(40 + 8 + 23 - 10)

console.log('Nika')
console.log(21)

// declaring a variable (a box) in camelCase syntax
let firstName = 'Nika'
console.log(firstName)

console.log(`---------- VARIABLE NAME CONVENTIONS START ----------`)
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
console.log(`---------- VARIABLE NAME CONVENTIONS END ----------`)

console.log(`---------- DATA TYPES START ----------`)
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
console.log(`---------- DATA TYPES END ----------`)

console.log(`---------- LET, CONST AND VAR START ----------`)
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
console.log(`---------- LET, CONST AND VAR END ----------`)

console.log(`---------- BASIC OPERATORS START ----------`)
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
console.log(`---------- BASIC OPERATORS END ----------`)

console.log(`---------- OPERATOR PRECEDENCE START ----------`)
console.log(25 - 10 - 5)

let w, y
w = y = 25 - 10 - 5 // 10
console.log(x, y) // 10 10, x = y = 10, y = 10, x = 10
const averageAge = (ageNika + ageSarah) / 2
console.log(ageNika, ageSarah, averageAge)
console.log(`---------- OPERATOR PRECEDENCE END ----------`)

console.log(`---------- STRINGS AND TEMPLATE LITERALS START ----------`)
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
console.log(`---------- STRING AND TEMPLATE LITERALS END ----------`)

console.log(`---------- TAKING DECISIONS: IF/ELSE STATEMENTS START ----------`)
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
console.log(`---------- TAKING DECISIONS: IF/ELSE STATEMENTS END ----------`)

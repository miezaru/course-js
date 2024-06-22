// let js = 'amazing'
// console.log(40 + 8 + 23 - 10)

// console.log('Nika')
// console.log(21)

// declaring a variable (a box) in camelCase syntax
// let firstName = 'Nika'
// console.log(firstName)

//? VARIABLE NAME CONVENTIONS START
// varibales can only contain numbers, letters, undescores or a dollar sign
// let 3years = 3

// variable can`t start with a number and use reserve js keywords
// let function = 27
// let name = 'Artem' - name also reserved but allowed to use (in some cases creates problems)

// not starts with uppercase letter, its convention
// let Person = 'Nika'

// constants in uppercase
// let PI = 3.1415

// let myFirstJob = 'Programmer'
// let myCurrentJob = 'Teacher'

// let job1 = 'Programmer'
// let job2 = 'Teacher'

// console.log(myFirstJob)
//? VARIABLE NAME CONVENTIONS END

//* DATA TYPES START
// typeof
// console.log(typeof true) // boolean
// console.log(typeof 2) // number
// console.log(typeof 'Nika') // string (always use single or double quotes)
// console.log(typeof undefined) // undefined
// console.log(typeof null) // object (bug, error), should returned null

// let javaScriptIsFun = true
// console.log(javaScriptIsFun, typeof javaScriptIsFun) // true, 'boolean'
// javaScriptIsFun = 'Yes'
// console.log(javaScriptIsFun, typeof javaScriptIsFun) // Yes, string

// let year
// console.log(year, typeof year)

// year = 1997
// console.log(year, typeof year)
//* DATA TYPES END

//? LET, CONST AND VAR START
// GOOD PRACTIVE - to have as little variable mutations as possible (always use const, change to let if needed, var completely avoided)

// let, var - mutating variables
// let age = 30
// age = 31

// const - immutable variable
// const birthYear = 1997
// birthYear = 1998
// console.log(birthYear) // TypeError: Assigment to constant variable.
// const job; // SyntaxError: need initial value

// var job = 'programmer'
// job = 'teacher'

// never write variables w/o declared it
// lastName = 'Sein'
// console.log(lastName)
//? LET, CONST AND VAR END

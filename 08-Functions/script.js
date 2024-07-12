'use strict';

const topics = [
  'DEFAULT PARAMETERS',
  'HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE',
  'FIRST-CLASS AND HIGHER-ORDER FUNCTIONS',
  'FUNCTIONS ACCEPTING CALLBACK FUNCTIONS',
  'FUNCTIONS RETURNING FUNCTIONS',
  'THE CALL AND APPLY METHODS',
  'THE BIND METHOD',
  'IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)',
  'CLOSURES',
  'MORE CLOSURE EXAMPLES',
];

const separator = topicNum =>
  console.log(`
|----------[ ${topics[topicNum]} ]----------|
  `);

//~ DEFAULT PARAMETERS
separator(0);

const bookings = [];

// Default values are expressions
// We can use parameters THAT ARE DECLARED before they called
const createBooking = function (flightNum, numPassangers = 1, price = 199 * numPassangers) {
  // ES5 (old way)
  // numPassangers = numPassangers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassangers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// Specify undefined, when we have no values for parameter or want to skip, it gonna be changed to default value
createBooking('LH123', undefined, 1000);

separator(1);
//~ HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE

const flight = 'LH234';
const artem = {
  name: 'Artem Usatyi',
  passport: 2834747828,
};

// flightNum - COPY of original value
// passanger - ORIGINAL object
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2834747828) {
    console.log('Check in');
  } else {
    console.log('Wrong password');
  }
};

checkIn(flight, artem);

console.log(flight);
console.log(artem);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(artem);
checkIn(flight, artem);

//_ Passing by value
//_ Passing by reference (not works in JavaScript)
//_ When we pass object - we pass it like value with a reference

separator(2);
//~ FIRST-CLASS AND HIGHER-ORDER FUNCTIONS

//_ First-class functions
// JavaScript treats functions as first-class citizens
// This means that functions are simply values
// Functions are just another "type" of object

// Store functions in variables or properties:
const add = (a, b) => a + b;
const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

// Pass functions as arguments to OTHER functions:
const greet = () => console.log('Hey Artem');
document.querySelector('.buy').addEventListener('click', greet);

// Return functions FROM functions

// Call methods on functions:
// counter.inc.bind(someOtherObject);

//_ Higher-order functions
// A function that receuves another function as an argument, that returns a new function, or both
// This is only possible because of first-class functions

// Function that receives another function
// addEventListener - higher-order function, callback function - greet
document.querySelector('.buy').addEventListener('click', greet);

// Function that return new function
// count - higher-order function
function count() {
  let counter = 0;

  // returned function
  return function () {
    counter++;
  };
}

//_ First-class functions is just a feature, that means all functions are values. That`s it. That`s just a concept.

//_ Higher-order are possible because the language supports first-class functions.

separator(3);
//~ FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

// Help us write more absctract code (level of abstraction)

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher-order function - operating on a higher-level of abstraction, leaving the low-level details to other low-level functions
// deligating the string transform to other lower-level functions wich are oneWord and upperFirstWord
const transfromer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transfromer('JavaScript is the best!', upperFirstWord);
transfromer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  // console.log('👋');
};
document.body.addEventListener('click', high5);

// array callback function
['Artem', 'Nika', 'Malta', 'Toki'].forEach(high5);

separator(4);
//~ FUNCTIONS RETURNING FUNCTIONS

//_ Closure
const greet2 = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
greet2('Hello')('Malta');

const greeterHey = greet2('Hey');
greeterHey('Artem');
greeterHey('Nika');

// Challenge (rewrite greet2 with arrow functions)
const greet2Arr = greeting => name => console.log(`${greeting} ${name}`);
greet2Arr('Hi')('Artem');

separator(5);
//~ THE CALL AND APPLY METHODS

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Artem Usatyi');
lufthansa.book(625, 'Nika Smith');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// undefined, does NOT work
// book(23, 'Sarah Williams');

//_ Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 482, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 406, 'Tom Willer');
console.log(swiss);

//_ Apply method - not using in the modern JavaScript
// Takes not a list but an array of arguments
const flightData = [583, 'Milani Kane'];
book.apply(swiss, flightData);
console.log(swiss);

// Instead of using apply, we can still use call method and spread out the arguments from the array
book.call(swiss, ...flightData);

separator(6);
//~ THE BIND METHOD

const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');
console.log(eurowings);

const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// Number already preset, we only need name
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Artem Usatyi');
bookEW23('Dana Gammer');

//_ With event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // error, this keyword looks at button with .buy class
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//_ Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // skip 1 parameter (this value) and set tax-rate to 0.23
console.log(addVAT(100));

//_ Where to use call and bind
/*
1. Do I need to store this function in a variable for later use? If so, use bind()
2. Do I need to pass this function as an argument? If so, use bind()
3. Do I need to call this function right now? If so, use call() */

// Challenge

const addTaxRate = rate => {
  return value => value + value * rate;
};

const addVAT20 = addTaxRate(0.2);
console.log(addVAT20(100));

separator(7);
//~ IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// IIFE - a JavaScript function that runs as soon as it is defined

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE - just a function value/function expression
(function () {
  console.log('This will never run again');
  const isPrivateFunc = 21;
})();

// console.log(isPrivateFunc) - we have no access to variables in function scope (execution context / incapsulated)

(() => console.log('This will never run again'))();

{
  const isPrivateBlock = 21;
  var notPrivate = 44;
}

// console.log(isPrivate) - we have no access to const or let variables in from block scope
console.log(notPrivate); // var ignores block scope

//_ Now IIFE not used anymore because from ES6 blocks have their own scope and we can create and call functions inside the block unless we want use var variables

//_ But if we need to execute function just once, then the IIFE a good choice

separator(8);
//~ CLOSURES

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers}`);
  };
};

const booker = secureBooking();

// Explanation

booker();
booker();
booker();

// Explanation

// any function always has access to the variable enviroment of the execution context in which the function was created

// A function has access to the variable enviroment (VE) of the execution context in which it was created
// Closure: VE attached to the function, exactly as it was at the time and place the function was created

// When EX was destroyed, VE still living somewhere in the JS Engine

// Closure priority > scope chain priority

//_ Closures summary
/*
- A closure is the closed over variable enviroment of the execution context in which a function was created, even after that execution context is gone

 - Less formal: A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time

 - Less formal: A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place

 - Less formal: A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the enviroment where the function was created

 - The main advantage of closures is that they help us create private variables and methods, preventing other parts of the code from accidentally modifying or accessing them.
 */

// We do NOT have to manually create closures, this is a JavaScript feature that happens automatically. We can't even access closed-over variables explicitly. A closure is NOT a tangible JavaScript object

// console.dir() - static method displays a list of the properties of the specified JavaScript object.
// [[Scopes]], [[Prototype]] - internal properties that we can not access from the code
console.dir(booker);

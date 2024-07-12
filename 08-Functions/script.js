'use strict';

//~ DEFAULT PARAMETERS

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
  console.log('👋');
};
document.body.addEventListener('click', high5);

// array callback function
['Artem', 'Nika', 'Malta', 'Toki'].forEach(high5);

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

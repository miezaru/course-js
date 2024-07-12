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

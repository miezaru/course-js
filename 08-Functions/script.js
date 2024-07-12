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

// Specify undefined, when we have no values for parameter, it gonna be changed to default value
createBooking('LH123', undefined, 1000);

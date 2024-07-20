'use strict';

{
  const lectures = [
    'Converting and cheking numbers',
    'Math and rounding',
    'The remainder operator',
    'Numeric separators',
    'Working with BigInt',
    'Creating Dates',
    'Adding Ddates to "Banklist" App',
    'Operation with dates',
    'Internationalizing Dates (Intl)',
    'Internationalizing Numbers (Intl)',
    'Timers: setTimeout and setInterval',
    'Implementing a Countdown timer',
  ];

  const separator = val => {
    if (typeof val === 'number')
      return console.log(`\n|----------[ ${lectures[val]} ]----------|\n\n`);
    if (typeof val === 'string') return console.log(`----- ${val} -----`);
  };

  //~ Converting and cheking numbers
  separator(0);

  console.log(23 === 23.0);

  // Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.33333
  // Binary base 2 - 0 1

  console.log(0.1 + 0.2);
  console.log(0.1 + 0.2 === 0.3);

  separator('conversion');
  console.log(Number('23'));
  console.log(+'23');

  separator('parsing - parseInt and parseFloat');
  // console.log(Number.parseInt('30px', 2)); // binary
  console.log(Number.parseInt('30px', 10));
  console.log(Number.parseInt('px30', 10));

  console.log(Number.parseFloat('   2.5rem   '));
  console.log(Number.parseInt('   2.5rem   '));

  console.log(parseFloat('   2.5rem   '));

  separator('isNaN');
  console.log(Number.isNaN(20));
  console.log(Number.isNaN('20'));
  console.log(Number.isNaN(+'20X'));
  console.log(Number.isNaN(23 / 0));

  separator('isFinite - checking if value is number');
  console.log(Number.isFinite(20));
  console.log(Number.isFinite(20.0));
  console.log(Number.isFinite(20.1));
  console.log(Number.isFinite('20'));
  console.log(Number.isFinite(+'20X'));
  console.log(Number.isFinite(23 / 0));

  separator('isInteger');
  console.log(Number.isInteger(23));
  console.log(Number.isInteger(23.0));
  console.log(Number.isInteger(23.1));
  console.log(Number.isInteger(23 / 0));

  //~ Math and rounding
  separator(1);

  separator('Math.sqrt()');
  console.log(Math.sqrt(25));
  console.log(25 ** (1 / 2));
  console.log(8 ** (1 / 3));

  separator('Math.max()');
  console.log(Math.max(5, 18, '23', 11, 2));

  separator('Math.min()');
  console.log(Math.min(5, 18, '23', 11, 2));

  separator('Math.PI');
  console.log(Math.PI);
  console.log(Math.PI * Number.parseFloat('10px') ** 2); // pi * r ** 2

  separator('Math.random()');
  console.log(Math.trunc(Math.random() * 6) + 1);

  // 0...1 -> 0...(max-min) -> min...(max - min + min) -> min...max
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
  console.log(randomInt(10, 20));

  separator('rounding integers');

  separator('Math.trunc()');
  console.log(Math.trunc(23.3));
  console.log(~~23.3);

  separator('Math.round()');
  console.log(Math.round(23.3));
  console.log(Math.round(23.9));

  separator('Math.ceil()');
  console.log(Math.ceil(23.3));
  console.log(Math.ceil(23.9));

  separator('Math.floor()');
  console.log(Math.floor(23.3));
  console.log(Math.floor('23.9'));

  separator('Math.trunc() vs Math.floor()');
  console.log(Math.trunc(-23.3));
  console.log(Math.floor(-23.9));

  separator('rounding decimals');

  separator('toFixed');
  console.log((2.7).toFixed(0));
  console.log((2.7).toFixed(3));
  console.log((2.745).toFixed(2));
  console.log(+(2.745).toFixed(2));
}

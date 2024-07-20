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

  const separator = num => {
    if (typeof num === 'number')
      return console.log(`\n|----------[ ${lectures[num]} ]----------|\n\n`);
    if (typeof num === 'string') return console.log(`----- ${num} -----`);
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
  console.log(Number.isFinite('20'));
  console.log(Number.isFinite(+'20X'));
  console.log(Number.isFinite(23 / 0));

  separator('isInteger');
  console.log(Number.isInteger(23));
  console.log(Number.isInteger(23.0));
  console.log(Number.isInteger(23 / 0));
}

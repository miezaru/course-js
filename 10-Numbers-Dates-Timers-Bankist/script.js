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

  // Numbers represents in 64bits
  // 53 of 64 for storing digits
  // rest 11 for decimal points and the sign

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

  //~ The remainder operator
  separator(2);

  console.log(5 % 2); // 5 = 2 + 2 + 1
  console.log(5 / 2);

  console.log(8 % 3); // 8 = 2 * 3 + 2
  console.log(8 / 3);

  console.log(6 % 2);
  console.log(6 / 2); // 3 - exactly integer

  console.log(7 % 2);
  console.log(7 / 2);

  separator('isEven function');
  const isEven = n => n % 2 === 0;
  console.log(isEven(8));
  console.log(isEven(23));
  console.log(isEven(46));

  separator('practice');
  labelBalance.addEventListener('click', function () {
    [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
      // 0, 2, 4, 6
      if (i % 2 === 0) row.style.backgroundColor = 'orangered';

      // 0, 3, 6, 9
      if (i % 3 === 0) row.style.backgroundColor = 'blue';
    });
  });

  //~ Numeric separators
  separator(3);

  // 287,460,000,000
  const diameter = 287_460_000_000;
  console.log(diameter);

  const priceCents = 345_99;
  console.log(priceCents);

  const transferFree1 = 15_00;
  const transferFree2 = 1_500;

  // const PIerr = _3_._1415_;
  const PI = 3.14_15;
  console.log(PI);

  console.log(Number('230_000')); // NaN
  console.log(parseInt('230_000')); // 230

  //~ Working with BigInt
  separator(4);

  // Biggest number
  console.log(2 ** 53 - 1);
  console.log(Number.MAX_SAFE_INTEGER);

  // Using this numbers are not safe
  console.log(2 ** 53 + 1);
  console.log(2 ** 53 + 2);
  console.log(2 ** 53 + 3);
  console.log(2 ** 53 + 4);

  //_ ES2020 - BigInt
  console.log(494948484874848588349484213123123123552359n);
  console.log(BigInt(494948484874));

  separator('operations');
  console.log(10000n + 10000n);
  console.log(234923492394923949239492349n * 1231231239123123123n);

  // console.log(Math.sqrt(60n)); - error

  separator('cannot mix BigInt with numbers');
  const huge = 3218418409128409812094809124n;
  const num = 23;
  console.log(huge * BigInt(num));

  separator('exceptions - logical operations and strings concatination');
  console.log(20n > 15); // true
  console.log(20n === 20); // false
  console.log(20n == 20); // true
  console.log(typeof 20n);

  console.log(huge + ' is REALLY big!!!');

  separator('divisions');
  console.log(11n / 3n);
  console.log(11 / 3);

  //~ Creating dates
  separator(5);

  separator('creating dates');
  const now = new Date();
  console.log(now);

  console.log(new Date('Sat Jul 20 2024 16:50:13'));
  console.log(new Date('December 24, 2015'));
  console.log(new Date(account1.movementsDates[0]));

  // Moths in JavaScript is 0 based (0 - 11)
  console.log(new Date(2037, 10, 19, 15, 23, 5));
  console.log(new Date(2037, 10, 33));

  console.log(new Date(0));

  separator('days to milliseconds');
  console.log(new Date(3 * 24 * 60 * 60 * 1000));

  separator('working with dates');
  const future = new Date(2037, 10, 19, 15, 23);
  console.log(future);

  console.log(future.getFullYear());
  console.log(future.getMonth() + 1);
  console.log(future.getDate());
  console.log(future.getDay());
  console.log(future.getHours());
  console.log(future.getMinutes());
  console.log(future.getMilliseconds());

  separator('storing dates in ISO format');
  console.log(future.toISOString());

  separator('get time in milliseconds');
  console.log(future.getTime()); // 2142249780000
  console.log(new Date(2142249780000));

  console.log(Date.now());

  separator('set date');
  future.setFullYear(2040);
  console.log(future);

  //~ Operations with dates
  separator(7);

  console.log(Number(future));
  console.log(+future);

  const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

  const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
  console.log(days1);

  //_ For date operations including time changes and other weird changes - use library moment.js

  //~ Internationalizing Dates (Intl)
  separator(8);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  console.log(new Date().toLocaleString('en-US', options));
  console.log(new Date().toLocaleString('de-DE', options));

  console.log(new Intl.DateTimeFormat('en-US', options).format(new Date()));

  separator('working with dates in different time zones');
  const optionsTime = { timeZone: 'America/New_York' };
  console.log(new Date().toLocaleString('en-US', optionsTime));
  console.log(new Date().toLocaleString('de-DE', optionsTime));

  console.log(new Intl.DateTimeFormat('en-US', optionsTime).format(new Date()));

  //~ Internationalizing Numbers (Intl)
  separator(9);

  const locale = navigator.language || navigator.userLanguage;
  const optionsNumber = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };
  console.log(new Intl.NumberFormat(locale, optionsNumber).format(123456.789));
  console.log(new Intl.NumberFormat('en-US', optionsNumber).format(123456.789));

  const optionsNum = {
    style: 'currency',
    currency: 'EUR',

    // style: 'percent',

    // style: 'unit',
    // unit: 'mile-per-hour',
    // unit: 'celsius',

    // useGrouping: false,
  };

  const number = 3884764.23;
  console.log('US:', new Intl.NumberFormat('en-US', optionsNum).format(number));
  console.log('DE:', new Intl.NumberFormat('de-DE', optionsNum).format(number));
  console.log('Syria:', new Intl.NumberFormat('ar-SY', optionsNum).format(number));

  separator('navigator.language');
  console.log(navigator.language);
  console.log('Browser:', new Intl.NumberFormat(navigator.language, optionsNum).format(number));

  //~ Timers: setTimeout and setInterval
  separator(10);

  separator('setTimeout');
  const ingredients = ['olives', 'spinach'];
  const pizzaTimer = setTimeout(
    (ing1, ing2) => {
      return console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`);
    },
    3000,
    ...ingredients
  );

  console.log('Waiting...');

  if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

  separator('setInterval');
  setInterval(() => {
    const now = new Date();
    const hour = `${new Date().getHours()}`.padStart(2, '0');
    const minutes = `${new Date().getMinutes()}`.padStart(2, '0');
    const seconds = `${new Date().getSeconds()}`.padStart(2, '0');

    console.log(`${hour}:${minutes}:${seconds}`);
  }, 1000);
}

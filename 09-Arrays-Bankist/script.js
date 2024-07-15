'use strict';

//~ LECTURES

const lectures = [
  'Simple array methods',
  'The new at method',
  'Looping arrays: forEach',
  'forEach with maps and sets',
  'PROJECT: "Banklist" app',
  'Creating DOM elements',
  'Data transformations: map, filter, reduce',
  'The map method',
  'Computing usernames',
  'The filter method',
  'The reduce method',
  'The magic of chaining methods',
  'The find method',
  'Implementing login',
  'Implementing transfers',
  'The findIndex method',
  'some and every methods',
  'flat and flatMap methods',
  'Sorting arrays',
  'More ways of creating and filling arrays',
  'Summary: which array method to use?',
  'Array methods practice',
];

const separator = num => {
  if (typeof num === 'number')
    return console.log(`\n|----------[ ${lectures[num]} ]----------|\n\n`);
  if (typeof num === 'string') return console.log(`----- ${num} -----`);
};

/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]); */

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//~ Simple arrays methods
separator(0);

let arr = ['a', 'b', 'c', 'd', 'e'];

//_ Slice
separator('slice() method');

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1)); // last item in array
console.log(arr.slice(1, -2)); // from element with index 1 to the end, except last 2 elements

// shallow copy
console.log(arr.slice());
console.log([...arr]);

let arrCopy = [...arr];
arrCopy.push('f');
console.log(arr, arrCopy); // not the same

// Spread operator doesn’t safely copy multi-dimensional arrays. Array/object values are copied by reference instead of by value.

let arr3 = [[0], [1]];
let arr3Copy = [...arr3];
arr3Copy[0].push(1); // push to reference
arr3Copy.push(2); // push to arr3Copy only
console.log(arr3, arr3Copy);

//_ Splice
separator('splice() method');

// console.log(arr.splice(2));
console.log(arr);
console.log(arr.splice(-1)); // remove last element
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr); // splice change original array

//_ Reverse
separator('reverse() method');

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2);
console.log(arr2.reverse()); // mutate original
console.log(arr2);

//_ Concat
separator('concat() method');

const letters = arr.concat(arr2);
console.log(letters);
// or
console.log([...arr, ...arr2]);

//_ Join
separator('join() method');

console.log(letters.join(' - '));

//~ The new at method
separator(1);

arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

separator('last element in array');
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

separator('works on strings');
console.log('Artem'.at(0));
console.log('Artem'.at(-1));

//~ Looping arrays: forEach
separator(2);

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

separator('for-of loop');
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

separator('for-of loop with entries');
for (const [index, value] of movements.entries()) {
  if (value > 0) {
    console.log(`Movement ${index + 1}: You deposited ${value}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(value)}`);
  }
}

separator('forEach loop');
movements.forEach((movement, index, array) => {
  movement > 0
    ? console.log(`Movement ${index + 1}: You deposited ${movement}`)
    : console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
});

//_ forEach vs for-of loop - forEach have no "continue" and "break" statements

// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ...

//~ forEach with Maps and Sets
separator(3);

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

separator('forEach loop on Map');
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

separator('forEach loop on Set');
const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'USD', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach((value, _, set) => {
  console.log(`${value}: ${value}`);
});

//~ Data transformations: map, filter, reduce

//_ map returns a new array containing the results of applying an operation on all original array elements

//_ filter returns a new array containing the array elements that passed a specified test condition

//_ reduce boils ("reduces") all array elements down to one single value (e.g. adding all elements together)

//~ The map method
separator(7);

const eurToUsd = 1.1;

separator('with map method');
const movementsUsd = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUsd);

separator('with for-of loop');
const forOfMovementsUsd = [];
// for (const [i, move] of movements.entries()) forOfMovementsUsd.push(move * eurToUsd);
for (const move of movements) forOfMovementsUsd.push(move * eurToUsd);

console.log(forOfMovementsUsd);

separator('movemets descriptions');
const movementsDescriptions = movements.map(
  (mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);

//~ The filter method
separator(9);

separator('with filter method');
// Each true condition is returned
const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);
console.log(deposits, withdrawals);

separator('with for-of loop');
const forOfDeposits = [];
for (const mov of movements) {
  if (mov > 0) forOfDeposits.push(mov);
}

console.log(forOfDeposits);

//~ The reduce method
separator(10);

separator('with reduce method');

// accumulator -> snowball
const balance = movements.reduce((acc, cur, i, arr) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur; // each loop return a new accumulator
}, 0);
console.log(balance);

separator('with for-of loop');

let forOfBalance = 0;
for (const mov of movements) forOfBalance += mov;
console.log(forOfBalance);

separator('maximum value');
const max = movements.reduce((acc, mov) => (acc > mov ? acc : mov), movements[0]);
console.log(max);

//~ The magic of chaining methods
separator(11);
//_ Avoid mutating original array!

separator('pipeline');
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov);

console.log(totalDepositsUSD);

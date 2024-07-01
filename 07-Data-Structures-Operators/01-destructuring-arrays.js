'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//~ DESTUCTURING ARRAYS

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4
console.log(arr); // [2, 3, 4] - do nothing to original array

//_ Skip element in the middle
let [first, , third] = restaurant.categories;
console.log(first, third); // Italian Vegetarian

/*
const temp = first
first = third
third = temp
console.log(first, third) */ // Vegetarian Italian

//_ Destruction trick
[first, third] = [third, first];
console.log(first, third);

//_ Receive 2 return values from a function
console.log(restaurant.order(2, 0)); // ['Garlic Bread', 'Pizza']
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//_ Nested destructuring
const nested = [2, 4, [5, 6]];

const [i, , j] = nested;
console.log(i, j); //2 [5, 6]

const [l, , [n, k]] = nested;
console.log(l, n, k); // 2 5 6

//_ Default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // 8 9 undefined

const [d = 1, s = 1, v = 1] = [8, 9];
console.log(d, s, v); // 8 9 1

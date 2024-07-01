'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //_ Destracturing function parameters
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(starterIndex, mainIndex, time, address);
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

//~ DESTRUCTURING OBJECTS

//_ The order of the elements in objects does not matter
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//_ Get objects properties in variables
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

//_ Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//_ Mutating variables when destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// {a, b} = obj; // syntax error, unexpected token =
({ a, b } = obj);
console.log(a, b);

//_ Nested objects
/*
const { fri } = openingHours;
console.log(fri); */

/*
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); */ // 11 23

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23

//_ Object in a function like a parameter

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

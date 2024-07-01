'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },
};

//~ SPEAD OPERATOR

//_ Bad way
const arr = [7, 8, 8];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//_ Good way
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//_ Spread operator takes all elements of the array and doesn't create new variables

//_ Shallow copy of an array
//_ Shallow copy means that it will copy only the top values inside an array. So if you had an object as an value in your array, that object will be the same object in both arrays. It will copy just it's reference.
const mainMenuCopy = [...restaurant.mainMenu];

//_ Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//_ Spead operator works not only on arrays, but on all iterables

//_ Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Artem';
const letters = [...str, '', 'U.'];
console.log(letters);
console.log(...str);

//_ Always works when we past arguments in to the function or when we build a new array
// console.log(`${...str} Usatyi`); // Error

//_ Real world example, spreated by coma igredients as a parameters
const ingredients = [
  // prompt("Let's, make pasta! Ingredient 1?"),
  // prompt("Let's, make pasta! Ingredient 2?"),
  // prompt("Let's, make pasta! Ingredient 3?"),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2], ingredients[3]);
restaurant.orderPasta(...ingredients);

//_ Objects (object.assign() - old way to copy objects (top level properties))
const newRestourant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestourant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

restaurantCopy.mainMenu.push('Riskard');
console.log(restaurantCopy);
console.log(restaurant);

//~ Assignments

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: ['J.K.Rowling'],
    isbn: '0439064864',
    keywords: ['fantasy', 'paranormal'],
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
  },
  {
    title: 'Jurassic Park',
    author: ['Stephen King'],
    isbn: '9781784752224',
    keywords: ['science-fiction', 'horror'],
  },
  {
    title: 'The Lord of the Rings',
    author: ['Tolkien'],
    isbn: '9780544003415',
    keywords: ['fantasy', 'adventure'],
  },
  {
    title: 'The Hobbit',
    author: ['Tolkien'],
    isbn: '9780544003415',
    keywords: ['fantasy', 'adventure'],
  },
  {
    title: 'The Hobbit',
    author: ['Tolkien'],
    isbn: '9780544003415',
    keywords: ['fantasy', 'adventure'],
  },
  {
    title: 'The Hobbit',
    author: ['Tolkien'],
    isbn: '9780544003415',
    keywords: ['fantasy', 'adventure'],
  },
  {
    title: 'The Hobbit',
    author: ['Tolkien'],
    isbn: '9780544003415',
    keywords: ['fantasy', 'adventure'],
  },
];

/*
Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.

Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays). */

const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

/*
Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space. */

const spellWord = function (str) {
  console.log(...str);
};
spellWord('Piece');
spellWord('JavaScript');

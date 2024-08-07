'use strict';
{
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

    //_ Destracturing function parameters
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

    //_ Spread operator
    orderPasta: function (ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
    },

    //_ Rest operator
    orderPizza: function (mainIngerient, ...otherIngredients) {
      console.log(mainIngerient, otherIngredients);
    },
  };

  //~ LOGICAL ASSIGNMENT OPERATOR

  const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
  };

  const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
  };

  //_ OR assignment operator
  // rest1.numGuests = rest1.numGuests || 10;
  // rest2.numGuests = rest2.numGuests || 10;
  // console.log(rest1, rest2);

  // rest1.numGuests ||= 10;
  // rest2.numGuests ||= 10;
  // console.log(rest1, rest2);

  //_ Nullish assignment operator (null or undefined)
  rest1.numGuests ??= 10;
  rest2.numGuests ??= 10;
  console.log(rest1, rest2);

  //_ AND assignment operator
  // rest1.owner = rest1.owner && '<ANONYMOUS>';
  // rest2.owner = rest2.owner && '<ANONYMOUS>';
  // console.log(rest1, rest2);

  // this one better then top one
  rest1.owner &&= '<ANONYMOUS>';
  rest2.owner &&= '<ANONYMOUS>';
  console.log(rest1, rest2);

  //~ Assignments

  const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: ['J.K.Rowling', 'John Depp'],
      keywords: ['fantasy', 'paranormal'],
      edition: 2,
      thirdParty: {
        goodreads: {
          rating: 4.41,
          ratingsCount: 1733,
          reviewsCount: 63,
          fiveStarRatingCount: 976,
          oneStarRatingCount: 13,
        },
      },
      highlighted: true,
    },
    {
      title: 'Jurassic Park',
      author: ['Stephen King'],
      keywords: ['science-fiction', 'horror'],
      publisher: { amazon: 'amazon', goodreads: 'goodreads' },
      thirdParty: {
        goodreads: {
          rating: 3.5,
          ratingsCount: 1221,
          reviewsCount: 43,
          fiveStarRatingCount: 433,
          oneStarRatingCount: 21,
        },
      },
      highlighted: true,
    },
  ];

  // Some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.

  for (let i = 0; i < books.length; i++) {
    books[i].edition ||= 1;
  }
  console.log(books);

  // Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.

  /* for (let i = 0; i < books.length; i++) {
    if (books[i].thirdParty.goodreads.rating < 4.2) {
      books[i].highlighted &&= !true;
    }
  } */

  for (let i = 0; i < books.length; i++) {
    books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
  }

  console.log(books);
}

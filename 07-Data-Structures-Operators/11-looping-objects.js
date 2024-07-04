'use strict';
{
  // Data needed for a later exercise
  const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

  // Data needed for first part of the section
  const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // old enhanced object literals
    // openingHours: openingHours,

    // ES6 enhanced object literals (because variables has the same name)
    openingHours,

    //_ Destracturing function parameters
    // Old way to write methods
    /*
    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }, */
    // ES6 way to write methods
    order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    //_ Destracturing function parameters
    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
      console.log(starterIndex, mainIndex, time, address);
      console.log(
        `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
      );
    },

    //_ Spread operator
    orderPasta(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
    },

    //_ Rest operator
    orderPizza(mainIngerient, ...otherIngredients) {
      console.log(mainIngerient, otherIngredients);
    },
  };

  //~ LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES

  //_ Properties names (Object keys)
  const properties = Object.keys(openingHours);
  console.log(properties);
  let openStr = `We are open on ${properties.length} days: `;

  for (const day of properties) {
    openStr += `${day}, `;
  }

  console.log(openStr);

  //_ Properties values (Object values)
  const values = Object.values(openingHours);
  console.log(values);

  //_ Properties names and values (Object entries)
  const entries = Object.entries(openingHours);
  console.log(entries);

  //_ Looping through (Object entries)
  for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
  }

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

  // Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array.

  const entries1 = [];
  for (const key of Object.keys(books[0].thirdParty.goodreads)) {
    entries1.push([key]);
  }
  console.log(entries1);

  // Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.

  // Push each value to the appropriate inner array in the entries array (use index from entries()).

  for (const [index, value] of Object.values(books[0].thirdParty.goodreads).entries()) {
    entries1[index].push(value);
  }
  console.log(entries1);

  // Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2.

  const entries2 = Object.entries(books[0].thirdParty.goodreads);
  console.log(entries2);

  // Log the entries and entries2 variables to the console, and compare them. They should look the same.

  console.log(entries1);
  console.log(entries2);
}

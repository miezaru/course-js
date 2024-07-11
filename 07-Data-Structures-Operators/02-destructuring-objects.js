'use strict';

{
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
  let { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
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
  console.log(a, b); // 23 7

  //_ Nested objects
  /*
  const { fri } = openingHours;
  console.log(fri); { close: 23, open: 11 } */

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

  //~ Assignments

  // Destructure the first book object from the books array into variables called title, author and ISBN.
  const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K.Rowling',
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
      author: 'Stephen King',
      keywords: ['science-fiction', 'horror'],
    },
    {
      title: 'Book',
    },
    {
      title: 'Book',
    },
    {
      title: 'Book',
    },
    {
      title: 'Book',
    },
    {
      title: 'The Hobbit',
      author: 'Tolkien',
      keywords: ['fantasy', 'adventure'],
    },
  ];

  // const [{ title: title, author: author, isbn: isbn }] = books;
  const { title: title, author: author, isbn: isbn } = books[0];
  console.log(title, author, isbn);

  // Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.
  ({ keywords: tags } = books[0]);
  console.log(tags);
  // tags variable declared before, otherwise:
  // const { keywords: tags } = book[0];

  // The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.

  const { language, programmingLanguage = 'unknown' } = books[6];
  console.log(language, programmingLanguage);

  // Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.
  let bookTitle = 'unknown';
  let bookAuthor = 'unknown';

  ({ title: bookTitle, author: bookAuthor } = books[0]);
  console.log(bookTitle, '-', bookAuthor);

  /*
Each book object has a deeply nested rating property as illustrated below:

{
  title: 'Algorithms',
  ...
  thirdParty: {
    goodreads: {
      rating: 4.41,              // <-- HERE
      ratingsCount: 1733,
      reviewsCount: 63,
      fiveStarRatingCount: 976,
      oneStarRatingCount: 13
    }
  }
},

Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

Please do most of the work on the left side of the assignment operator: const ... = books[0];
*/

  const {
    thirdParty: {
      goodreads: { rating: bookRating },
    },
  } = books[0];
  console.log(bookRating);

  /*
Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.
*/

  const printBookInfo = function ({ title, author, year = 'unknown' }) {
    return console.log(`${title} by ${author}, ${year}`);
  };
  printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });
  printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });
}

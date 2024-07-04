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

  //~ OPTIONAL CHAINING (?.)

  if (restaurant.openingHourse && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
  }

  // console.log(restaurant.openingHours.mon.open); // undefined.open

  //_ WITH optional chaining
  // open will read if all chain before exist and not undefined/null
  console.log(restaurant.openingHours.mon?.open); //undefined
  console.log(restaurant?.openingHours?.mon?.open); // undefined
  console.log(restaurant?.openingHours?.fri?.open); // 11

  //_ Example
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day} we open at ${open}`);
  }

  //_ Methods
  console.log(restaurant.order?.(0, 1) || 'Method does not exist');
  console.log(restaurant.orderRisotto?.(0, 1) || 'Method does not exist');

  //_ Arrays
  const users = [
    {
      name: 'Artem',
      email: 'hello@example.com',
    },
  ];

  console.log(users[0]?.name ?? 'User array is empty');
  console.log(users[1]?.name ?? 'User array is empty');

  //~ Assignments

  const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: ['J.K.Rowling', 'John Depp'],
      keywords: ['fantasy', 'paranormal'],
    },
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: ['J.K.Rowling', 'John Depp'],
    },
  ];

  const getFirstKeyword = bookObj => {
    return bookObj.keywords?.[0];
  };

  console.log(getFirstKeyword(books[0]));
  console.log(getFirstKeyword(books[1]));
}

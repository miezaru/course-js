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

  //~ LOOPING ARRAYS: THE FOR-OF LOOP

  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
  console.log(menu);

  //_ For-of loop
  for (const item of menu) console.log(item);

  for (const [i, el] of menu.entries()) {
    // console.log(`${item[0] + 1}: ${item[1]}`);

    console.log(`${i + 1}: ${el}`);
  }

  console.log([...menu.entries()]);
}

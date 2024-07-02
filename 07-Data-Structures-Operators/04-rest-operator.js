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

  //~ REST PATTERN AND PARAMETERS
  //_ Spread operator using when we write values separated by commas
  //_ Rest operator using when we write variable names separated by commas
  //_ Rest of the elements, not including skipping
  //_ Rest is opposite of spread

  //_ SPREAD, because on RIGHT side of =
  const arr = [1, 2, ...[3, 4]];
  console.log(arr);

  //_ REST, because on LEFT side of =
  const [a, b, ...others] = [1, 2, 3, 4, 5];
  console.log(a, b, others);

  //_ Rest must be last
  // const [pizza, , risotto, ...otherFood, bread] // error
  const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
  console.log(pizza, risotto, ...otherFood);

  //_ Objects
  const { sat, ...weekDays } = restaurant.openingHours;
  console.log(sat, weekDays);

  //_ Functions
  const add = function (...numbers) {
    let sum = 0;
    numbers.forEach(function (i) {
      sum += i;
    });
    console.log(sum);
  };

  add(2, 3);
  add(5, 3, 7, 2);
  add(2, 3, 3, 56, 743, 2, 32, 56);

  const x = [23, 5, 7];
  add(...x);

  // call method
  restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
  restaurant.orderPizza('mushrooms');
}

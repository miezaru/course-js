'use strict';
{
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

  //~ Assignments

  // Destructure the books array into two variables called firstBook and secondBook.
  const books = ['Harry Potter', 'A Song of Secrets', 'The Lord of the Rings'];
  let [firstBook, secondBook] = books;

  // Destructure the books array into a variable called thirdBook. You must skip the first two books.
  let [, , thirdBook] = books;

  // Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
  const ratings = [
    ['rating', 4.19],
    ['ratingsCount', 144584],
  ];

  let [[, rating], [, ratingsCount]] = ratings;

  // Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.
  const ratingStars = [63405, 1808];
  let [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
}

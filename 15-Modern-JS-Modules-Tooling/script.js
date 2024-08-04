//~ An overview of modules in JavaScript

//_ Module
/*
  - Module: reusable piece of code that encapsulates implementation details
  - Usually a standalone file, but it doesn`t have to be

why modules?

  - Compose software: modules are small building blocks that we put together to build complex applications
  - Isolate components: modules can be developed in isolation withoud thinking about the entire codebase
  - Abstract code: implement low-level code in modules and import these abstractions into other modules
  - Organized code: modules naturally lead to a more organized codebase
  - Reuse code: modules allow us to easily reuse the same code, even across multiple projects
*/

//_ ES6 modules
/*
  - Modules stored in files, exactly one module per file
  - Top level varibales: ES6 - scoped to module, SCRIPT - global
  - Default mode:        ES6 - strict mode,      SCRIPT - "sloppy" mode
  - Top-level this:      ES6 - undefined,        SCRIPT - window
  - Import/export:       ES6 - YES,              SCRIPT - NO
  - HTML linking:        ES6 - type="module"     SCRIPT - <script>
  - File downloading:    ES6 - asynchronous      SCRIPT - synchronous
*/

// [img]

// Importing module

console.log('Importing module');
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
addToCart('bread', 5);
console.log(price, tq);

import * as ShoppingCart from './shoppingCart.js';
console.log(ShoppingCart.totalPrice);
console.log(ShoppingCart.tq);
ShoppingCart.addToCart('bread', 10);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
import add from './shoppingCart.js';
import { cart } from './shoppingCart.js';
add('bread', 15);
add('pizza', 3);
add('apples', 8);

console.log(cart);

//~ Top-level await (ES2022)
/*
console.log('Start fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('Something'); */

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  // console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

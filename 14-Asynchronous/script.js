'use strict';

const lectures = [
  'Asynchronous JavaScript, AJAX and APIs',
  'Our First AJAX Call: XMLHttpRequest',
  '[OPTIONAL] How the Web Works: Requests and Responses',
  'Welcome to Callback Hell',
  'Promises and the Fetch API',
  'Consuming Promises',
  'Chaining Promises',
  'Handling Rejected Promises',
  'Throwing Errors Manually',
  'Asynchronous Behind the Scenes: The Event Loop',
  'The Event Loop in Practice',
  'Building a Simple Promise',
  'Promisifying the Geolocation API',
  'Consuming Promises with Async/Await',
  'Error Handling With try...catch',
  'Returning Values from Async Functions',
  'Running Promises in Parallel',
  'Other Promise Combinators: race, allSettled and any',
];

const separator = val => {
  if (typeof val === 'number')
    return console.log(`\n|----------[ ${lectures[val]} ]----------|\n\n`);
  if (typeof val === 'string') return console.log(`----- ${val} -----`);
};

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//~ Asynchronous JavaScript, AJAX and APIs
separator(0);

//_ Synchronous code
/*
  - Most code is synchonous
  - Synchronous code is executed line by line
  - Each line of code waits for previous line to finish
  - Ling-running operations block code execution
*/

//_ Assynchronous code
/*
  - Asynchronos code is executed after a task that runs in the "background" finishes
  - Asynchronous code is non-blocking
  - Execution doesn`t wait for an asynchronous task to finish its work
  - Callback functions alone do NOT make code asynchronous
*/

//_ AJAX
/*
  AJAX - Asynchronous JavaScript And XML: Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically

  AJAX not using XML now, JSON instead
*/

//_ API
/*
  - API - Application Programming Interface: Piece of software that can be used by another piece of software, in order to allow applications to talk to each other
  - There are be many types of APIs in web development: DOM API, Geolocation API, Own Class API, "Online" API
  - "Online" API: Application running on a server, that receives requests for data, and sends data back as response
  - We can build our own web API (requires back-end development, e.g. with node.js) or use 3rd-party APIs
*/

//~ Our first AJAX call: XMLHttpRequest
separator(1);

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  console.log(request);

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);

    const html = `
<article class="country">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.official}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1_000_000).toFixed(2)} people</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
    <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0]}</p>
  </div>
</article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('ukraine');

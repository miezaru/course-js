'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//~ Asynchronous JavaScript, AJAX and APIs

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

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1_000_000).toFixed(2)} people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
      <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0]}</p>
    </div>
  </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryDataAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  console.log(request);

  //_ AJAX call country 1
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //_ Render country
    renderCountry(data);

    //_ Get neighbour country
    const neighbour = data.borders?.[0];

    //_ AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryDataAndNeighbour('ukraine');

//~ Welcome to callback hell

/*
setTimeout(() => {
  console.log('1 second past');
  setTimeout(() => {
    console.log('2 second past');
    setTimeout(() => {
      console.log('3 second past');
    }, 1000);
  }, 1000);
}, 1000); */

//~ Promises and the Fetch API

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const requestFetch = fetch('https://restcountries.com/v3.1/name/ukraine');
// console.log(requestFetch);

//_ Promise
/*
  - Promise: an object is used as a placeholder for the future result of an aynchronous operation
less formal
  - Promise: a container for an asynchronously delivered value
less formal
  - Promise: a container for a future value (value example - response from AJAX call).

  - We no longer need to rely on events and callbacks passed into asynchronous function to handle asynchronous result

  - Insted of nesting callbacks, we can chain promises for a sequence of asynchronous operations: escaping callback hell
*/

//~ Consuming promises

const requestFetch = fetch('https://restcountries.com/v3.1/name/ukraine');

const getJSON = function (url, errorMsg = `Something went wrong`) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  //_ Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found');

      //_ Country 2
      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(data => {
      renderCountry(data[0], 'neighbour');
    })
    .catch(err => {
      renderError(`Something went wrong ${err.message}. Try again later.`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   countriesContainer.textContent = '';
//   getCountryData('ukraine');
// });

//~ The event loop in practice
console.log('Test start');

//_ Callback queue
setTimeout(() => {
  console.log('0 sec timer');
}, 0);

//_ Microtasks queue
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('Test end');

//~ Building a simple primise

//_ Pass in function (executor)
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 😶');

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject('You lost your money 💩');
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//_ Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second past');
    return wait(1);
  })
  .then(() => {
    console.log('2 second past');

    return wait(1);
  })
  .then(() => console.log('3 second past'));

/*
setTimeout(() => {
  console.log('1 second past');
  setTimeout(() => {
    console.log('2 second past');
    setTimeout(() => {
      console.log('3 second past');
    }, 1000);
  }, 1000);
}, 1000); */

Promise.resolve('Immediately resolve').then(x => console.log(x));

Promise.reject(new Error('Immediatyle reject')).catch(err => console.error(err));

//~ Promisifying the Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(console.log(position)),
    //   err => reject(console.error(err))
    // );

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }
  });
};

// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
      );
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    })
    .then(data => {
      const { countryName } = data;
      const { city } = data;
      console.log(`You are in ${city}, ${countryName}`);

      return fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`Something went wrong: ${err.message}`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', whereAmI);

//~ Consuming promises with Async/Await

const getPosition2 = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI2 = async function (country) {
  // Geolocation
  const position = await getPosition();
  const { latitude: lat, longitude: lng } = position.coords;

  // Reverse geolocation
  const resGeo = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
  );
  const geoData = await resGeo.json();

  // Country data
  const { countryName } = geoData;
  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  const data = await res.json();

  // Render country
  renderCountry(data[0]);
};

whereAmI2();

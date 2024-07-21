'use strict';

const lectures = [
  'How the DOM really works',
  'Selecting, creating and deleting elements',
  'Styles, attributes and classes',
  'Implementing smooth scrolling',
  'Types of events and event handlers',
  'Event propagation: Bubbling and Capturing',
  'Event propagation in pracice',
  'Event delegation: implementing page navigation',
  'DOM traversing',
  'Building a tabbed component',
  'Passing arguments to event handlers',
  'Implementing a sticky navigation: the scroll event',
  'A better way: The Intersection Observer API',
  'Revealing elements on scroll',
  'Lazy loading images',
  'Building a slider component, part 1',
  'Building a slider component, part 2',
  'Lifecycle DOM events',
  'Efficient script loading: defer and async',
];

const separator = val => {
  if (typeof val === 'number')
    return console.log(`\n|----------[ ${lectures[val]} ]----------|\n\n`);
  if (typeof val === 'string') return console.log(`----- ${val} -----`);
};

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//~ How the DOM really works

/*
  - Allows us to make JavaScript interact with the browser
  - We can write JavaScript to create, modify and delete HTML elements,   set styles, classes and attributes, and listen and respond to events
  - DOM tree is generatoir from an HTML document, which we can then interact with
  - DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree

  [img]
*/

//~ Selecting, creating and deleting elements
separator(1);

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

separator('Nodelist NOT updates when we delete one of the elements');
const headerEl = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

separator('HTMLCollection updates when we delete one of the elements');
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

separator('Creating and inserting elements');
// insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies to improved functionality and analytics.';
message.innerHTML =
  'We use cookies to improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//_ prepend - first child
headerEl.prepend(message);

//_ append - last child
headerEl.append(message);
// headerEl.append(message.cloneNode(true));

//_ before and after the element

headerEl.before(message);
headerEl.after(message);

// We can use prepend and append not only for inserting elements, but also move them

//_ delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // message.parentElement.removeChild(message);

  return message.remove();
});

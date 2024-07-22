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

//~ Creating and inserting elements
// insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies to improved functionality and analytics.';
message.innerHTML =
  'We use cookies to improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// We can use prepend and append not only for inserting elements, but also move them
//_ prepend - first child
headerEl.prepend(message);

//_ append - last child
headerEl.append(message);

//_ More than one append
// headerEl.append(message.cloneNode(true));

//_ before and after the element
headerEl.before(message);
headerEl.after(message);

//_ delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // message.parentElement.removeChild(message);
  return message.remove();
});

//~ Styles, attributes and classes
separator(2);

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '100%';

separator('Shows only styles what we added before with style attribute');
console.log(message.style.color);
console.log(message.style.backgroundColor);

separator('Get access to all element styles');
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

separator('Change custom properties (css variables)');
// document.documentElement.style.setProperty('--color-primary', 'orangered');

separator('Attributes');
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log((logo.alt = 'Beautiful minimalist logo'));

console.log(logo.src);
console.log(logo.getAttribute('src'));

console.log(logo.className);

// Non standart (doesn`t work)
console.log(logo.designer);

separator('Get and set attributes');
console.log(logo.getAttribute('designer'));
console.log(logo.setAttribute('company', 'Bankist'));
console.log(logo);

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

separator('Data attributes');
console.log(logo.dataset.versionNumber);

separator('Classes');
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Don't use, because it removes other classes
// logo.className = 'jonas';

//~ Implementing smooth scrolling
separator(3);

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //_ Scrolling
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

  //_ Oldschool, and if u need offset
  /*
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset + 100,
    behavior: 'smooth',
  }); */

  section1.scrollIntoView({ block: 'start', behavior: 'smooth' });
});

const relativeLinks = document.querySelectorAll("a[href^='#']");
console.log(relativeLinks);
relativeLinks.forEach(link =>
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetEl = document.querySelector(`${link.getAttribute('href')}`);
    const coords = targetEl.getBoundingClientRect();

    window.scrollTo({
      left: coords.left + window.pageXOffset,
      top: coords.top + window.pageYOffset + 100,
      behavior: 'smooth',
    });

    // targetEl.scrollIntoView({ block: 'start', behavior: 'smooth' });
  })
);

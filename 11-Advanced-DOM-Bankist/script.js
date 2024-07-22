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

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

/*
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

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset + 100,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ block: 'start', behavior: 'smooth' });
}); */

//_ Only once event listener
/*
buttonScrollTo.addEventListener("click", function () {
  console.log("Only once");
}, { once: true }) */

/* const relativeLinks = document.querySelectorAll("a[href^='#']");
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
); */

//~ Types of events and event handlers
separator(4);

const h1 = document.querySelector('h1');

/*
h1.addEventListener(
  'mouseenter',
  e => {
    alert('addEventListener: Great! You are reading the heading :D');
  },
  { once: true }
); */

// Old way
/*
h1.onmouseenter = e => {
  alert('addEventListener: Great! You are reading the heading :D');
}; */

// Even listener better because it's allowed us to add multiple event listeners to the same event, we can remove event if we do not need it anymore and we can override event listeners when we rewrite it
const alertH1 = e => {
  alert('addEventListener: Great! You are reading the heading :D');

  // only listen to events once, or we can use { once: true } like in the first event
  // can inserted anywhere, like in the setTimeout at the bottom
  // h1.removeEventListener('mouseenter', alertH1);
};

// h1.addEventListener('mouseenter', alertH1);

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);

//~ Event propagation: bubbling and capturing
separator(5);

// [img]

//~ Event propagation in practice
separator(6);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  // this.style.backgroundColor = randomColor();
  // console.log('LINK', e.target, e.currentTarget);
  // console.log(e.currentTarget === this);
  //_ Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // this.style.backgroundColor = randomColor();
  // console.log('CONTAINER', e.target, e.currentTarget);
  // console.log(e.currentTarget === this);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    // this.style.backgroundColor = randomColor();
    // console.log('NAV', e.target, e.currentTarget);
    // console.log(e.currentTarget === this);
  },
  // true - change from bubbling to capturing (false default)
  false
);

//~ Event delegation: implementing page navigation
separator(7);

//~ DOM traversing
separator(8);

const h1El = document.querySelector('h1');

separator('Going dawnwards: child');
console.log(h1El.querySelectorAll('.highlight'));
console.log(h1El.childNodes);
console.log(h1El.children);
console.log(h1El.firstElementChild);
h1El.firstElementChild.style.color = 'white';
h1El.lastElementChild.style.color = 'orangered';

separator('Going upwards: parents');
console.log(h1El.parentNode);
console.log(h1El.parentElement);

separator('closest (find parent) method is opposite to querySelector (find children)');
h1El.closest('.header').style.background = 'var(--gradient-secondary)';
h1El.closest('h1').style.background = 'var(--gradient-primary)';

separator('Going sideways: siblings');
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

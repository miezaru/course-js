'use strict';
//_ Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const nav = document.querySelector('.nav');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

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

//_ Page navigation

// Button scrolling
btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();

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

/*
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();

    // this.href - absolute path
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
}); */

//_ Event delegation: implementing page navigation

//_ 1. Add event listener to common parent element
//_ 2. Detemine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // console.log(e.target);

  //_ Matching strategy
  if (e.target.classList.contains('nav__link')) {
    // this.href - absolute path
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//_ Tabbed component

tabsContainer.addEventListener('click', function (e) {
  //_ Fix clicking on a span
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  //_ Return if clicked tabsContainer
  //_ (returns null because have no closest('operations__tab'))
  if (!clicked) return;

  //_ Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //_ Activate content area
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
  // console.log(clicked.dataset.tab);
});

//_ Menu fade animation

const handleHover = function (opacity) {
  return function (e) {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;

      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');

      siblings.forEach(el => {
        if (el !== link) el.style.opacity = opacity;
      });

      logo.style.opacity = opacity;
    }
  };
};

nav.addEventListener('mouseover', handleHover(0.5));
nav.addEventListener('mouseout', handleHover(1));

/*
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });

    logo.style.opacity = opacity;
  }
}; */

/*
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

*/

/*
const handleHover = function (e, opacity) {
  console.log(this, e.currentTarget)

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
}; */

/*
// passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
 */

//~ Sticky navigation

//_ With scroll event (bad practice and performance, because scroll event fires every time we scroll the page)
/*
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener('scroll', function (e) {
  // console.log(e);
  // console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
 */

//_ With Intersection Observer API

/*
const observerCallback = function (entries, observer) {
  // entries is an array of threshold
  entries.forEach(entry => {
    console.log(entry);
  });
};
const observerOptions = {
  root: null, // The element whose bounding box is used as the root for the intersection calculations. Default is null, which means it's the viewport.
  rootMargin: '0px', // A string that specifies the root's margin. Default is '0px'.
  threshold: [0, 0.2], // An array of numbers representing the percentage of the target's visibility that must be visible for the observer's callback to be invoked.
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(section1);
 */

const headerEl = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // negative value means that the header will be 90px from the bottom of the viewport when it starts to hide.
});
headerObserver.observe(headerEl);

//~ Revealing elements (sections) on scroll

const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target); // Remove observer once the section is visible. This improves performance because it avoids unnecessary checks.
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15, // 15% of the element is visible before triggering the callback.
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

//~ Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  // console.log(entries);
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  imgObserver.unobserve(entry.target); // Remove observer once the image is loaded. This improves performance because it avoids unnecessary checks.
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//~ Building a slider component
const slider = function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length - 1;
  console.log(maxSlide);

  //_ Functions
  const goToSlide = function (slide) {
    slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
  };

  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
  };

  //_ Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
    // curSlide = 1: -100%, 0, 100%, 200%
  };

  //_ Prev slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  //_ Slider init function
  const init = () => {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  //_ Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    // console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      curSlide = +slide;
      activateDot(slide);
      goToSlide(slide);
    }
  });
};

slider();

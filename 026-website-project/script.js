'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const nav = document.querySelector('.nav');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

/* Button - Learn More */
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); // coord relative to the viewport

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'Height/width viewPort: ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, // current position + current scroll
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

// or - the old way
// h1.onmouseenter = function(e) {
//   console.log('Mouse Enter!');
// };

// To remove an event listener
const alertH1 = function (e) {
  alert('addEventlistener: Great! You are reading the header!');

  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// Event delegation - Page navigation
// 1. Add event listener to common parent ele
// 2. Determine what ele originated the event
// Here, add a big event handler to the parent, to manage the children
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   })
// });

/* Tab Feature */
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Use event delegation
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  if (!clicked) return; // Guard clause

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  clicked.classList.add('operations__tab--active');

  // Activate content area
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu Fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// Passing argument event handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
// Change way to write
// Bind() returns a new function
nav.addEventListener('mouseout', handleHover.bind(1));

// const initialCoords = section1.getBoundingClientRect();
// // Sticky navigation
// window.addEventListener('scroll', function() {
//   // When reach the section 1
//   if (window.scrollY > initialCoords.top)
//     nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Using API
// Observing the scrolling action
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null, // entire view port
  // threshold: 0.1, // intersection viewport by 10%
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

// Here, add sticky
const header = document.querySelector('.header');

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-90px',
});

headerObserver.observe(header);

// Revealing contents on scrolling
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy Loading -- API - for performance
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // replace src with data-src of the image(entry.target)
  entry.target.src = entry.target.dataset.src;
  // Remove the blur filter
  // add load event listener - to make sure the high resolution img is ready behind the scene
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', // start loading earilier
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');
const slider = document.querySelector('.slider');

let currentSlide = 0;
const maxSlide = slides.length;

// slider.style.transform = 'scale(0.5)';
// slider.style.overflow = 'visible';

/* Functions */
const createDots = function () {
  slides.forEach(function (_, i) {
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
 
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - currentSlide)}%)`)
  );
};

// 0%, 100%, 200%, 300%

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++; // next slide
  }
  // First action: -100% 0% 100% 200%
  goToSlide(currentSlide);
  activateDot(currentSlide)
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

const init = function() {
  goToSlide(0);
  createDots();
  activateDot(0);
}

init();

// Next slide
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

// Keyboard event to Slider
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
});

// Dots to control slider
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    // same as const slide = e.target.dataset.slide
    currentSlide = e.target.dataset.slide;
    // console.log('clicked', slide);
    goToSlide(currentSlide);
    activateDot(currentSlide);
  }
});

////////////////////////////////////////////////////////////
// Capturing phase and bubbling phase
// rgb(255, 255, 255) - generate a random color
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
// 0 - 255
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// console.log(randomColor(0, 255));

// Add event listener
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(); // event bubbles up the its parents
  // target - where the event(click) first happened, not the ele attached
  // currentTarget - event handler is attached === this
  console.log('LINK', e.target, e.currentTarget);

  // Stop propagation
  e.stopPropagation(); // not a good idea
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target); // nav__link
});

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('NAV', e.target); // nav__link if click the nav__link
});









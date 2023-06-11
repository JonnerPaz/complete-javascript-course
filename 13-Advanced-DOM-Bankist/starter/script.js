'use strict';

///////////////////////////////////////
// Modal window

// Selectors

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const imgTargets = document.querySelectorAll('img[data-src]'); // checks all images with data-src class
const btnSliderLeft = document.querySelector('.slider__btn--left');
const btnSliderRight = document.querySelector('.slider__btn--right');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const nav = document.querySelector('.nav');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// functions

const openModal = function (e) {
  e.preventDefult;
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(el => el.addEventListener('click', openModal));

// Events

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', e => {
  e.preventDefault();

  const s1coords = section1.getBoundingClientRect();

  // Scrolling. Receives left and top position
  // Going to section 1

  /* window.scrollTo(
    s1coords.left + window.scrollX,
    s1coords.top + window.scrollY
  ); */

  // Other way to do the same
  /* window.scrollTo({
    left: s1coords.left + window.scrollX,
    top:  s1coords.top + window.scrollY,
    behavior: 'smooth'
  }) */

  // More modern way
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

// Page navigation

// Remember: when calling events, it is recommended to use 'function' keyword instead of arrow function

// Implementing Event delegation on links
// 1. addEventListener to common parent element
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // 2. determine what element originated the event. Matching strategy
  // console.log(e.target.classList);
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// Tabbed Component Using Event Delegation
tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Removing classes
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  tabs.forEach(el => el.classList.remove('operations__tab--active'));

  // Active Tabs
  clicked.classList.add('operations__tab--active');

  // Active content
  // dataset stored on element is used. Each one has it own coded on the html file
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu Fade links. Passing arguments on an event
const fadeInFadeOut = function (e) {
  // Not using closest() right below because there are no children elements that can accidentally fall in the event
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    // Here we move to parent element and from there we search a child or a group of children elements
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    // Change opacity of elements using "this" to matching "bind" method on event call
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// first argument of bind is new 'this' reference
nav.addEventListener('mouseover', fadeInFadeOut.bind(0.5));
nav.addEventListener('mouseout', fadeInFadeOut.bind(1));

// Sticky navigation

// const initialCoordinates = section1.getBoundingClientRect();
/* window.addEventListener('scroll', function () {
  // console.log(window.scrollY);
  const conditional =
    window.scrollY >= initialCoordinates.top
      ? nav.classList.add('sticky')
      : nav.classList.remove('sticky');
  return conditional;
}); */

// sticky navigation: intersection observer API
const navHeigth = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(
  entries => {
    // whenever the target is intersected by root and threshold, this will be called
    // there's only 1 threshold so we need just one element
    const [entry] = entries;
    return !entry.isIntersecting
      ? nav.classList.add('sticky')
      : nav.classList.remove('sticky');
  },
  {
    // target that the element is intersecting
    root: null, // intersects the entire window when "null"
    threshold: [0], // 0 = none of the viewport visible, 1 = All viewport visible
    rootMargin: `-${navHeigth}px`, // margin applied to desirable box. Negative to activate it outside of box
  }
);
headerObserver.observe(header);

// Reveal sections

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  // console.log(entry);
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // this is commented for now
  // section.classList.add('section--hidden');
});

// Lazy loading images

const revealImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.setAttribute('src', entry.target.dataset.src); // load full img resolution
  // Once the full img resolution is loaded, this event is executed
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(revealImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));

// Slider Component

let curSlide = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const maxSlide = slides.length;
slider.style.transform = 'scale(0.2) translateX(1200px)';
slider.style.overflow = 'visible';

// function to move around the slides
const goToSlide = function (slide = 0) {
  slides.forEach(
    (el, i) => (el.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide();

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function (slide) {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};
// Going to next slide
btnSliderRight.addEventListener('click', nextSlide);
btnSliderLeft.addEventListener('click', prevSlide);

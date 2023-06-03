'use strict';

///////////////////////////////////////
// Modal window

// Selectors

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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
  // window.close();

  /* console.log(
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); */

  // Scrolling. Receives left and top position
  // Going to section 1

  /* window.scrollTo(
    s1coords.left + window.scrollX,
    s1coords.top + window.scrollY
  ); */

  // Other way to do the same
  /* window.scrollTo({
    left: s1coords.left + window.scrollX,
    top:s1coords.top + window.scrollY,
    behavior: 'smooth'
  }) */

  // More modern way
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

// Page navigation

// Remember: when calling events, it is recommended to use 'function' keyword instead of arrow function
/* document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();

    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  });
}); */

// Implementing Event navigation

// 1. addEventListener to common parent element
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // 2. determine what element originated the event
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

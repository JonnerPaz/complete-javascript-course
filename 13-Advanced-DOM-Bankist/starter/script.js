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
  console.log(
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  console.log(s1coords);

  // Scrolling. Receives left and top position
  // Going to section 1
  window.scrollTo(
    s1coords.left + window.scrollX,
    s1coords.top + window.scrollY
  );
});

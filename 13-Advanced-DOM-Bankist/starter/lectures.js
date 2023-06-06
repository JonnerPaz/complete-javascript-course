'use strict';
// Event Listeners

const h1 = document.querySelector('h1');

// going downwards. this can be getters or setters
h1.querySelectorAll('.highlight');
h1.childNodes;
console.log(h1.children);
h1.firstElementChild; // as the name says. There are few related, this one is more modern

// Going upwards
h1.parentNode;
h1.parentElement;
h1.closest('.header');
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// going sideways: siblings!
h1.previousElementSibling;
h1.nextElementSibling;
h1.parentElement.children; // select all siblings. going to parent to select all his children
// const dude = [...h1.parentElement.children].forEach(el => { if (el !== h1) el.style.transform = 'scale(0.5)'; });

// remove handler
const alerth1 = () => {
  alert('Alert from addEventListener!');
  // This will make the event to reproduce only once
  h1.removeEventListener('mouseenter', alerth1);
};

// h1.addEventListener('mouseenter', alerth1);

// attaching events. This is old and not used often
/* h1.onmouseenter = e => {
  alert('On mouse enter!');
}; */

// random color
const randomint = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomColor = () =>
  `rgb(${randomint(0, 255)}, ${randomint(0, 255)}, ${randomint(0, 255)})`;

// e.target is where the event ocurred. Whereas
// e.currentTarget is the element attached to each event, taking in count bubbling
// e.currentTarget === this // TRUE

/* document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget);

  // Stop propagation. Not a good idea mostly, but possible
  e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('links', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('navbar', e.target, e.currentTarget);
}); */

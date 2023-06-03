// Event Listeners
const h1 = document.querySelector('h1');

// remove handler
const alerth1 = e => {
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

'use strict';

// Selecting Elements!
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const winnerMsg0 = document.querySelector('.message--0');
const winnerMsg1 = document.querySelector('.message--1');

// Starting elements
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// global score
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  // 1. Generating random dice roll

  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true, switch to the next player
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to the next player
    switchPlayer();
  }
});

// Holding score functionality
btnHold.addEventListener('click', () => {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  // check winner
  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');

    // Displaying winner
    document.querySelector(`.message--${activePlayer}`).style.fontSize = '4rem';
    document.querySelector(`.message--${activePlayer}`).style.color = '#c7365f';
    document.querySelector(`.message--${activePlayer}`).textContent =
      'You win!';

    // remove active player after winning
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    // Stop game
    btnHold.classList.add('hidden');
    btnRoll.classList.add('hidden');
    diceEl.classList.add('hidden');
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener('click', () => {
  // Reseting game logic
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];

  // Reseting display
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  winnerMsg0.textContent = '';
  winnerMsg1.textContent = '';
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  // bringing back btns
  btnHold.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
  diceEl.classList.remove('hidden');
});

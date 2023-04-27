'use strict';

/*
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);
// Change element content
document.querySelector('.message').textContent = '🎉 Correct Number!';

// CANNOT DO THIS BELOW. TextContent is required.
// document.querySelector('.number').textContent = 13;

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess');
document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);

*/

// node HTML and message displayed
function displayMessage(node, message) {
  return (document.querySelector(node).textContent = message);
}
let score = 20;
let highScore = 0;
const again = document.querySelector('.again');
const btn = document.querySelector('.check'); // button
let secretNumber = Math.trunc(Math.random() * 20) + 1;

btn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value); // Input

  // No input
  if (!guess) {
    displayMessage('.message', 'No Number! ⛔');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('.message', 'Correct Number! 🎉');
    // Changing CSS styles
    displayMessage('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      displayMessage('.highscore', highScore);
    }

    // Input is different (too high or too low)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        '.message',
        guess > secretNumber ? 'Too high!📈' : 'Too low!📉'
      );
      score--;
      document.querySelector('.score').textContent = score;

      // Lose game
    } else {
      displayMessage('.message', 'You lose!');
      displayMessage('.number', secretNumber);
      document.querySelector('body').style.backgroundColor = '#b34747';
    }
  }
});

// Reset game
again.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('.message', 'Start guessing...');
  displayMessage('.number', '?');
  displayMessage('.score', score);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

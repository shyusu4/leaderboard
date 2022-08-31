import { addScore, displayScore } from './modules/api';
import './style.scss';

const refreshBtn = document.querySelector('.refresh');
const submitBtn = document.querySelector('.submit');
const userInput = document.querySelector('.add-score');
displayScore();

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector('.name-input').value.trim();
  const score = document.querySelector('.score-input').value.trim();
  addScore(name, score);
  displayScore();
  userInput.reset();
});

refreshBtn.addEventListener('click', () => {
  displayScore();
});

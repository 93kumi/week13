import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>カウンター</h1>
  <p id="count" class="text-4xl font-bold">0</p>

  <button id="plus">増やす</button>
  <button id="minus">減らす</button>
  <button id="reset">リセット</button>
`;

const countEl = document.querySelector('#count');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const resetBtn = document.querySelector('#reset');

let count = 0;

plusBtn.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
});

minusBtn.addEventListener('click', () => {
  count -= 1;
  countEl.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  countEl.textContent = count;
});

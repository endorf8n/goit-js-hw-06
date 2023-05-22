let counterValue = 0;

const valueEl = document.querySelector("#value");
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

const onDecrementBtnElClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

decrementBtnEl.addEventListener("click", onDecrementBtnElClick);

const onIncrementBtnElClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

incrementBtnEl.addEventListener("click", onIncrementBtnElClick);

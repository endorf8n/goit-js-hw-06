function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnEl = document.querySelector(".change-color");
const colorValueEl = document.querySelector(".color");

const onChangeColorBtnElClick = (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorValueEl.textContent = document.body.style.backgroundColor;
};

changeColorBtnEl.addEventListener("click", onChangeColorBtnElClick);

// Для виведення кольору у HEX-форматі:

// const onChangeColorBtnElClick = (event) => {
//   colorValueEl.textContent = document.body.style.backgroundColor = getRandomHexColor();

// };

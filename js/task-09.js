function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// 1.Напиши скрипт, який змінює кольори фону елемента < body > через
// інлайн - стиль по кліку на button.change - color і виводить
// значення кольору в span.color.
// 2.Для генерування випадкового кольору використовуй функцію getRandomHexColor.

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

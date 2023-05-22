function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// 1. Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
//   після чого рендериться колекція.
//   Натисненням на кнопку Очистити, колекція елементів очищається.

// 2. Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount
// і додає їх у div#boxes.

// 2.1.Розміри найпершого <div> - 30px на 30px.
// 2.2.Кожен елемент після першого повинен бути ширшим і вищим від
// попереднього на 10px.
// 2.3.Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// 3. Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб
// видаляючи всі створені елементи.
const refs = {
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  inputEl: document.querySelector('[type="number"]'),
  boxesContainer: document.querySelector("#boxes"),
};
let boxSize = 30;

function createBoxes(event) {
  const inputValue = refs.inputEl.value;

  for (let i = 0; i < inputValue; i += 1) {
    boxSize += 10;

    const newBox = document.createElement("div");
    newBox.style.width = boxSize + "px";
    newBox.style.height = boxSize + "px";
    newBox.style.backgroundColor = getRandomHexColor();

    refs.boxesContainer.append(newBox);
  }
}

const destroyBoxes = () => {
  refs.boxesContainer.innerHTML = "";
  refs.inputEl.value = "";
  boxSize = 30;
};

refs.buttonCreate.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

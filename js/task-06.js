// 1. Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// - Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
// - Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// 2.Для додавання стилів використовуй CSS - класи valid і invalid,
//  які ми вже додали у вихідні файли завдання.

const inputFieldEl = document.querySelector('[data-length="6"]');

const onInputFieldElBlur = (event) => {
  if (
    Number(inputFieldEl.dataset.length) === Number(inputFieldEl.value.length)
  ) {
    inputFieldEl.classList.add("valid");
    inputFieldEl.classList.remove("invalid");
  } else {
    inputFieldEl.classList.add("invalid");
    inputFieldEl.classList.remove("valid");
  }
};

inputFieldEl.addEventListener("blur", onInputFieldElBlur);

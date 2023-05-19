// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє його поточне значення в
// span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputFieldEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

const onInputFieldElInput = (event) => {
  nameOutputEl.textContent = inputFieldEl.value;
  if (inputFieldEl.value === "") {
    nameOutputEl.textContent = "Anonymous";
  }
};

inputFieldEl.addEventListener("input", onInputFieldElInput);

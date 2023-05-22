const inputFieldEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

const onInputFieldElFill = (event) => {
  nameOutputEl.textContent = inputFieldEl.value;
  if (inputFieldEl.value === "") {
    nameOutputEl.textContent = "Anonymous";
  }
};

inputFieldEl.addEventListener("input", onInputFieldElFill);

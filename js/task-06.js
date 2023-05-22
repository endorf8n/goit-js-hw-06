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

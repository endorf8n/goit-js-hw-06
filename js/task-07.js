const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

const onMoveRange = (event) => {
  spanEl.style.fontSize = event.currentTarget.value + "px";
};

inputEl.addEventListener("input", onMoveRange);

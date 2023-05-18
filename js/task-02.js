const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

let newArrEl = [];
ingredients.forEach((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  newArrEl.push(itemEl);
});

listEl.append(...newArrEl);

// const itemArrEl = ingredients.map((ingredient) => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredient;
//   itemEl.classList.add("item");
//   return itemEl;
// });

// listEl.append(...itemArrEl);

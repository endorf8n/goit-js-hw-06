const categoriesItemArrEl = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categoriesItemArrEl.length);

categoriesItemArrEl.forEach((categoryItem) => {
  console.log("Category: ", categoryItem.firstElementChild.textContent);
  console.log("Elements: ", categoryItem.lastElementChild.children.length);
});

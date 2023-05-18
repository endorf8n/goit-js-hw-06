const categoriesItemArrEl = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categoriesItemArrEl.length);

categoriesItemArrEl.forEach((categoryItem) => {
  const categoryTitle = categoryItem.firstElementChild;
  console.log("Category: ", categoryTitle.textContent);
  const categoryItems = categoryItem.lastElementChild.children;
  console.log("Elements: ", categoryItems.length);
});

// const categoryTitle = categoryItem.querySelector("h2");
// const categoryItems = categoryItem.querySelectorAll("li");

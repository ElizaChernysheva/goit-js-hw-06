"use strict";
const list = document.querySelector("#ingredients");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const items = ingredients.map((el) => {
  let item = document.createElement("li");
  item.textContent = el;
  item.classList.add("item");
  return item;
});

list.prepend(...items);

"use strict";
const items = document.querySelectorAll(".item");
const headings = document.querySelectorAll("h2");
const itemsArr = [...items];

console.log(`Number of categories: ${items.length}`);

itemsArr.forEach((item, idx) => {
  const elements = item.querySelectorAll("li");
  console.log(
    `Category: ${headings[idx].textContent}\nElements:${elements.length}`
  );
});

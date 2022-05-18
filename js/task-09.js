"use strict";
const changeColorBtn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorBtn.addEventListener("click", (event) => {
  let randColor = getRandomHexColor();
  document.body.style.backgroundColor = `${randColor}`;
  spanColor.textContent = randColor;
});

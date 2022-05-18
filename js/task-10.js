"use strict";
const boxes = document.querySelector("#boxes");
const numberInput = document.querySelector("input[type = number]");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

createBtn.addEventListener("click", (event) => {
  createBoxes(numberInput.value);
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxesLength = boxes.querySelectorAll("div").length;
  const initialSize = boxesLength ? boxesLength * 10 + 30 : 30;

  for (let index = 0; index < amount; index += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = `${getRandomHexColor()}`;
    newDiv.style.width = `${initialSize + 10 * index}px`;
    newDiv.style.height = `${initialSize + 10 * index}px`;
    boxes.append(newDiv);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

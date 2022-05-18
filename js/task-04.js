"use strict";
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");
let counterValue = 0;

decBtn.addEventListener("click", (event) => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

incBtn.addEventListener("click", (event) => {
  counterValue += 1;
  counter.textContent = counterValue;
});

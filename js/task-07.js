"use strict";
const fontSizeInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");
console.log(textSpan);

fontSizeInput.addEventListener("input", ({ currentTarget }) => {
  textSpan.style.fontSize = `${currentTarget.value}px`;
});

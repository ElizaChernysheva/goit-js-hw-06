"use strict";
const fontSizeInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeInput.addEventListener("input", ({ currentTarget }) => {
  textSpan.style.fontSize = `${currentTarget.value}px`;
});

"use strict";
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  event.target.value === ""
    ? (nameOutput.textContent = "Anonymous")
    : (nameOutput.textContent = event.currentTarget.value);
});

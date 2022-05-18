"use strict";
const loginForm = document.querySelector(".login-form");
const user = {};

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены");
  } else {
    user.email = email.value;
    user.password = password.value;
  }
});

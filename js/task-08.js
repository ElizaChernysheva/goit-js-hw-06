"use strict";
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены");
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
  }

  event.currentTarget.reset();
});

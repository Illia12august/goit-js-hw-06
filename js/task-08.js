const info = {};
const form = document.querySelector(".login-form");
const email = document.querySelector("[name='email']");
const password = document.querySelector("[name='password']");
const unDefSet = (event) => {
  event.preventDefault();
  if (email.value === "" || password.value === "") {
    alert("you didn't fill the whole form");
  } else {
    info.email = email.value;
    info.password = password.value;
    console.log(info);
    form.reset();
  }
};
form.addEventListener("submit", unDefSet);

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", (value, name) => {
  if (value.currentTarget.value !== "") {
    output.textContent = value.currentTarget.value;
  } else {
    output.textContent = "Anonymous";
  }
});

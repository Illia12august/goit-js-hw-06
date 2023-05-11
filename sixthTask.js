const input = document.querySelector("#validation-input");
const checkLength = (event) => {
  if (event.currentTarget.value.length === 6) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};
input.addEventListener("blur", checkLength);

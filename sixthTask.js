const input = document.querySelector("#validation-input");
const rightLengt = input.dataset.length;
console.log(rightLengt);
const checkLength = (event) => {
  if (event.currentTarget.value.length === Number(rightLengt)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};
input.addEventListener("blur", checkLength);

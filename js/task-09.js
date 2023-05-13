const button = document.querySelector(".change-color");
const toChange = document.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBgColor = () => {
  const random = getRandomHexColor();
  toChange.textContent = `- ${random}`;
  document.body.style.backgroundColor = random;
};
button.addEventListener("click", changeBgColor);

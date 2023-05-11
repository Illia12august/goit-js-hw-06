const ranger = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const checkRange = (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
};
ranger.addEventListener("input", checkRange);

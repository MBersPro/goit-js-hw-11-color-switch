const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
    buttonStart: document.querySelector("#button__start"),
    buttonStop: document.querySelector("#button__stop"),
    bodyNode: document.querySelector("body")
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.buttonStart.addEventListener("click", () => {
    refs.buttonStart.disabled = true;
    interval = setInterval(() => {
        refs.bodyNode.style.background = colors[randomIntegerFromInterval(0, colors.length)];
    }, 150);
    refs.buttonStop.style.cursor = "pointer";
    refs.buttonStart.style.cursor = "not-allowed";
});

refs.buttonStop.addEventListener("click", () => {
    refs.buttonStart.disabled = false;
    refs.buttonStart.style.cursor = "pointer";
    refs.buttonStop.style.cursor = "not-allowed";
    clearInterval(interval);
});
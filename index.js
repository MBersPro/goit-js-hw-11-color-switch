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
    buttonKaif.classList.replace("is-hidden", "is-visible")
    
});

refs.buttonStop.addEventListener("click", () => {
    refs.buttonStart.disabled = false;
    refs.buttonStart.style.cursor = "pointer";
    refs.buttonStop.style.cursor = "not-allowed";
    clearInterval(interval);
    buttonKaif.classList.replace("is-visible", "is-hidden");
    music.pause();
});







const music = document.querySelector("#music")
const buttonKaif = document.querySelector("#button__kaif");

const bImg = document.querySelector("#bimg")
const oImg = document.querySelector("#oimg");

const something = () => {
    bimg.classList.replace("is-hidden", "is-visible");
    oimg.classList.replace("is-hidden", "is-visible");
}

buttonKaif.addEventListener("click", () => {
    music.play();
    setTimeout(something, 9400);
});
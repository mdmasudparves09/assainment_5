const lifeCount = document.querySelector("#lifeCount");
const coin = document.querySelector("#coinCount");
let historySection = document.querySelector("#historySection");
const copyCount = document.querySelector("#copyCount");
let life = 0;
let coinValue = 100;
let copyValue = 0;
document.querySelectorAll(".love_btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    lifeCount.innerHTML = ++life;
  });
});

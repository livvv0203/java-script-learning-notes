// select timer ele
let timerUI = document.querySelector('.timer');
let time = 5; // seconds

const timer = setInterval(function() {
  const min = String(Math.trunc(time / 60)).padStart(2, 0);
  const sec = String(Math.trunc(time % 60)).padStart(2, 0);

  if (time <= 0) clearInterval(timer);
  time--;
  timerUI.textContent = `${min} : ${sec}`;

}, 1000);









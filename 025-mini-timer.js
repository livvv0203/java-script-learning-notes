let timerEle = document.querySelector(".timer");

let time = 5; // sec

const timer = setInterval(function () {
    
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    
    if ( time <= 0 ) clearInterval(timer);
    time--;

  timerEle.textContent = `${min} : ${sec}`;
}, 1000);







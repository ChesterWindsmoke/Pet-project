// Знаходимо лічильник за допомогою id
let time = 36000;
const countDownEl = document.getElementById('countdown');


setInterval(updateCountDown, 1000);

function updateCountDown() {
    const hours = Math.floor(time / 60 / 60);
    const minutes = Math.floor(time / 60 / 10);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countDownEl.innerHTML = `${hours}:${minutes}:${seconds}`;
    time -= 1;
};





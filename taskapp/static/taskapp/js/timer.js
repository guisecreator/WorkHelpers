let time = 25 * 60;
let intervalId;

function startTimer() {
  intervalId = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    document.querySelector("#minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.querySelector("#seconds").textContent = seconds < 10 ? "0" + seconds : seconds;

    if (time === 0) {
      clearInterval(intervalId);
    } 
    else {
      time--;
    }
}, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

document.querySelector("#start").addEventListener("click", startTimer);
document.querySelector("#stop").addEventListener("click", stopTimer);
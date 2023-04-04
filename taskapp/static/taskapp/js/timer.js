let time = 25 * 60;
let intervalId;

function startTimer() {
  intervalId = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const timeString = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    document.querySelector("#time").textContent = timeString;

    if (time === 0) {
      clearInterval(intervalId);
    } else {
      time--;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  time = parseInt(document.querySelector("#minutes-input").value) * 60;
  const timeString = `${document.querySelector("#minutes-input").value}:00`;
  document.querySelector("#time").textContent = timeString;
}

document.querySelector("#start").addEventListener("click", startTimer);
document.querySelector("#pause").addEventListener("click", pauseTimer);
document.querySelector("#reset").addEventListener("click", resetTimer);
let timerIntervalId = null;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  if (!timerIntervalId) {
    timerIntervalId = setInterval(updateTimer, 1000);
  }
}

function pauseTimer() {
  clearInterval(timerIntervalId);
  timerIntervalId = null;
}

function resetTimer() {
  clearInterval(timerIntervalId);
  timerIntervalId = null;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimer();
}

function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  const timeString = padNumber(hours) + ':' + padNumber(minutes) + ':' + padNumber(seconds);
  document.getElementById('timer').textContent = timeString;
}

function padNumber(number) {
  return number < 10 ? '0' + number : number;
}
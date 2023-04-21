let time = 25 * 60;
let intervalId;
let timerWindow;

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

function stopTimer() {
  clearInterval(intervalId);
  time = 25 * 60;
  const timeString = "25:00";
  document.querySelector("#time").textContent = timeString;
}

function resetTimer() {
  clearInterval(intervalId);
  time = parseInt(document.querySelector("#minutes-input").value) * 60;
  const timeString = `${document.querySelector("#minutes-input").value}:00`;
  document.querySelector("#time").textContent = timeString;
}



function padNumber(number) {
  return number < 10 ? '0' + number : number;
}

function saveTimerState() {
  const state = {
    hours,
    minutes,
    seconds
  };
  localStorage.setItem('timerState', JSON.stringify(state));
}

function loadTimerState() {
  const stateStr = localStorage.getItem('timerState');
  if (stateStr) {
    const state = JSON.parse(stateStr);
    hours = state.hours;
    minutes = state.minutes;
    seconds = state.seconds;
    updateTimer();
  }
}

loadTimerState();

function stopTimer() {
  clearInterval(intervalId);
  time = 25 * 60;
  const timeString = "25:00";
  document.querySelector("#time").textContent = timeString;
}

function openTimerWindow() {
    const url = 'timer.html';
    const name = 'timer_window';
    const specs = 'width=400,height=200,resizable,scrollbars';
    window.open(url, name, specs);
  }


function openTimerWindow() {
  timerWindow = window.open("", "Pomodoro Timer", "width=400,height=300");

  timerWindow.document.write(`
    <html>
      <head>
        <title>Pomodoro Timer</title>
      </head>
      <body>
        <div id="timer">
          <p id="time">25:00</p>
        </div>
        <button id="start">Start</button>
        <button id="pause">Pause</button>
        <button id="stop">Stop</button>
        <button id="reset">Reset</button>
      </body>
    </html>
  `);

  timerWindow.document.querySelector("#start").addEventListener("click", startTimer);
  timerWindow.document.querySelector("#pause").addEventListener("click", pauseTimer);
  timerWindow.document.querySelector("#stop").addEventListener("click", stopTimer);
  timerWindow.document.querySelector("#reset").addEventListener("click", resetTimer);
}

document.querySelector("#open-timer").addEventListener("click", openTimerWindow);
var startBtn = document.querySelector("#start");
var stopBtn = document.querySelector("#stop");
var resetBtn = document.querySelector("#reset");

var secondHolder = document.querySelector(".second-holder");
var minuteHolder = document.querySelector(".minute-holder");
var hourHolder = document.querySelector(".hour-holder");

var timerInterval;

function updateTime() {
  var secondInt = +secondHolder.innerHTML + 1;
  var minuteInt = +minuteHolder.innerHTML;
  var hourInt = +hourHolder.innerHTML;

  if (secondInt === 60) {
    minuteInt++;
    secondInt = 0;
  }

  if (minuteInt === 60) {
    minuteInt = 0;
    hourInt++;
  }

  var formattedSecond = secondInt > 9 ? "" + secondInt : "0" + secondInt;
  secondHolder.innerHTML = formattedSecond;

  var formattedMinute = minuteInt > 9 ? "" + minuteInt : "0" + minuteInt;
  minuteHolder.innerHTML = formattedMinute;

  var formattedHour = hourInt > 9 ? "" + hourInt : "0" + hourInt;
  hourHolder.innerHTML = formattedHour;
}

startBtn.addEventListener("click", function () {
  timerInterval = setInterval(updateTime, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", function () {
  clearInterval(timerInterval);
  stopBtn.disabled = true;
  startBtn.disabled = false;
});

resetBtn.addEventListener("click", function () {
  clearInterval(timerInterval);
  stopBtn.disabled = false;
  startBtn.disabled = false;

  secondHolder.innerHTML = "00";
  minuteHolder.innerHTML = "00";
  hourHolder.innerHTML = "00";
});

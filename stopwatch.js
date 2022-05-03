var minutes = 00;
var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("secs");
var appendMinutes = document.getElementById("mins");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var Interval;
var x = document.getElementById("button-start");
var y = document.getElementById("button-stop");

buttonStart.onclick = function () {
  x.classList.toggle("on");
  y.classList.toggle("off");
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
};

buttonStop.onclick = function () {
  x.classList.toggle("on");
  y.classList.toggle("off");
  clearInterval(Interval);
};

buttonReset.onclick = function () {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  minutes = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  appendMinutes.innerHTML = minutes;
};

function startTimer() {
  tens++;

  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    seconds = 0;
    appendSeconds.innerHTML = "00";
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }
  }
}
function narSar() {
  document.getElementById("sun").classList.toggle("deesheldeg");
  document.getElementById("sun").classList.toggle("doosholdog");
  document.getElementById("moon").classList.toggle("deesheldeg");
  document.getElementById("moon").classList.toggle("doosholdog");
  document.body.classList.toggle("night");
  document.getElementById("button-start").classList.toggle("white");
  document.getElementById("button-stop").classList.toggle("white");
  document.getElementById("gold").classList.toggle("off");
  document.getElementById("silver").classList.toggle("off");
  document.getElementById("circle").classList.toggle("circle-day");
  document.getElementById("circle").classList.toggle("circle-night");
}

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

// timer

let timer = document.querySelector(".timer");

let clock = setTimeout(function runTimer() {
    let time = new Date(),
    hours = time.getHours().toString(),
    minutes = time.getMinutes().toString(),
    seconds = time.getSeconds().toString();

    if (hours.length < 2) {
      hours = "0" + hours;
    } else if (minutes.length < 2) {
      minutes = "0" + minutes;
    } else if (seconds.length < 2) {
      seconds = "0" + seconds;
    }

    timer.textContent = hours + ":" + minutes + ":" + seconds;
    setTimeout(runTimer, 1000);
});

});
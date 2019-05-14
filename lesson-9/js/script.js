window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  let tab = document.querySelectorAll(".info-header-tab"),
      info = document.querySelector(".info-header"),
      tabContent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent (a) {
    for (let i = a; i < tabContent.length; i++ ) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }
  hideTabContent(1);

  function showTabContent (b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }

  info.addEventListener("click", function (event) {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }

  });


// timer

let deadline = "2019-05-12";

function getTimeRemaining (endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor( (t / 1000) % 60 ),
      minutes = Math.floor( (t / 1000 / 60) % 60 ),
      hours = Math.floor( (t / (1000 * 60 * 60)) );

      return {
        "total" : t,
        "hours" : hours,
        "minutes" : minutes,
        "seconds" : seconds
      };
};
function setClock (id, endtime) {
  let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds"),
      timeInterval = setInterval(updateClock, 1000);

  function updateClock () {
    let t = getTimeRemaining(endtime),
        valueHours = t.hours.toString(),
        valueMinutes = t.minutes.toString(),
        valueSeconds = t.seconds.toString();

        
    hours.textContent = t.hours;
    minutes.textContent = t.minutes;
    seconds.textContent = t.seconds;

    if (t.total <= 0 && t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0) {
      hours.textContent = "00";
      minutes.textContent = "00";
      seconds.textContent = "00";
      clearInterval(timeInterval);
      let massage = document.querySelector(".timer-action");
      massage.textContent = "Акция закончилась";
    } 

    if (valueHours.length < 2) {
      hours.textContent = "0" + valueHours;
    } else if (valueMinutes.length < 2) {
      minutes.textContent = "0" + valueMinutes;
    } else if (valueSeconds.length < 2) {
      seconds.textContent = "0" + valueSeconds;
    }
  };
};

setClock ("timer", deadline);



//modal

let overlay = document.querySelector(".overlay");

document.addEventListener("click", (event) => {

  let target = event.target;
  
  if (target.classList == "description-btn" || target.classList == "more") {
    overlay.style.display = "block";
    target.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  }
  
  if (target.classList == "popup-close") {
    overlay.style.display = "none";
    document.getElementsByClassName('more-splash')[0].classList.remove("more-splash");
    document.body.style.overflow = "";
  }

});

/*
  function openModal () {
    overlay.style.display = "block";
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  }
  more.addEventListener("click", openModal);
  
  function closeModal () {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    document.body.style.overflow = "";
  }
  close.addEventListener("click", closeModal);

  for (let i = 0; i < descrBtn.length; i++) {
    descrBtn[i].addEventListener("click", openModal);
  }
*/
});
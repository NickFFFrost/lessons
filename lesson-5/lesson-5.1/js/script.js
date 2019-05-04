let = tagBody = document.getElementsByTagName("body")[0],
      menu = document.querySelector(".menu"),
      menuElement = document.querySelectorAll(".menu-item"),
      li = document.createElement("li"),
      adv = document.querySelector(".adv"),
      column = document.querySelectorAll(".column"),
      title = document.getElementById("title"),
      idPrompt = document.getElementById("prompt"),
      question = prompt("Как вы относитесь к технике Apple?");

tagBody.style.backgroundImage = "url(../img/apple_true.jpg)";

menu.insertBefore(menuElement[1], menuElement[3]);
li.innerHTML = "Пятый элемент";
li.classList.add("menu-item");
menu.appendChild(li);

title.textContent = "Мы продаем только подлинную технику Apple";

column[1].removeChild(adv);
idPrompt.innerHTML = question;






//document.menu.insertBefore();



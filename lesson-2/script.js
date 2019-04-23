"use strict";

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");
  
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
  let mandatoryExp = prompt("Введите обязательную статью расходов в этом месяце"),
      cost = +prompt("Во сколько обойдется?");

  if ( (typeof(mandatoryExp)) === 'string' && (typeof(cost)) != null 
        && mandatoryExp != '' && cost != '' && mandatoryExp.length < 50) {
        console.log("done");
        appData.expenses[mandatoryExp] = cost;
  } else {
      i--;
  }
}; 

let budgetOneDay = appData.budget / 30;

alert("бюджет на 1 день " + budgetOneDay);

if (budgetOneDay < 1000) {
  console.log("У вас милимальный уровень достатка");
} else if (budgetOneDay > 1000 && budgetOneDay < 5000) {
  console.log("У вас средний уровень достатка");
} else if (budgetOneDay > 5000){
  console.log("У вас высокий уровень достатка");
} else {
  console.log("Ошибка!");
}

console.log(appData);



/*
let i = 0;

while ( i < 2 ) {

  i++;

  let mandatoryExp = prompt("Введите обязательную статью расходов в этом месяце"),
      cost = +prompt("Во сколько обойдется?");

  if ( (typeof(mandatoryExp)) === 'string' && (typeof(cost)) != null 
        && mandatoryExp != '' && cost != '' && mandatoryExp.length < 50) {
        console.log("done");
        appData.expenses[mandatoryExp] = cost;
  } else {
      i--;
  }
};

let budgetOneDay = appData.budget / 30;

alert("бюджет на 1 день " + budgetOneDay);

console.log(appData);
*/

/*
let i = 0;

do {

  i++;

  let mandatoryExp = prompt("Введите обязательную статью расходов в этом месяце"),
  cost = +prompt("Во сколько обойдется?");

  if ( (typeof(mandatoryExp)) === 'string' && (typeof(cost)) != null 
    && mandatoryExp != '' && cost != '' && mandatoryExp.length < 50) {
    console.log("done");
    appData.expenses[mandatoryExp] = cost;
  } else {
      i--;
  }

} while ( i < 2 );

let budgetOneDay = appData.budget / 30;

alert("бюджет на 1 день " + budgetOneDay);

console.log(appData);
*/


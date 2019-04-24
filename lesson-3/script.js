"use strict";

let money,time,budgetOneDay;

function start () {
  money = +prompt("Ваш бюджет на месяц?");
  time = prompt("Введите дату в формате YYYY-MM-DD");

  while ( isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на месяц?");
  }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses () {
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
  }
}
chooseExpenses();
console.log(appData);

function detectDayBudget () {
  budgetOneDay = (appData.budget / 30).toFixed(1);
  alert("бюджет на 1 день " + budgetOneDay);
}
detectDayBudget();

function detectLevel () {
  if (budgetOneDay < 1000) {
    console.log("У вас милимальный уровень достатка");
  } else if (budgetOneDay > 1000 && budgetOneDay < 5000) {
    console.log("У вас средний уровень достатка");
  } else if (budgetOneDay > 5000){
    console.log("У вас высокий уровень достатка");
  } else {
    console.log("Ошибка!");
  }
}

function checkSavings () {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

    appData.monthIncome = save / 100 / 12 * percent;
    alert("Доход в месяц с вашего депозита " + appData.monthIncome)
  }
}
checkSavings();

let optionalExpenses = {};
function chooseOptExpenses () {

  let optionalExp;

  for (let i = 0; i < 3; i++) {
    optionalExp = prompt("Статья необязательных расходов?");
    if ( (typeof(optionalExp)) === 'string' && optionalExp != '' && optionalExp.length < 50) {
          console.log("done");
          optionalExpenses[i+1] = optionalExp;
    } else {
        i--;
    }
  }
}
chooseOptExpenses();

console.log(optionalExpenses);
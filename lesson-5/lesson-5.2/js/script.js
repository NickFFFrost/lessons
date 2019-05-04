"use strict";

let startBtn = document.getElementById("start"),
    budgetValue = document.querySelector(".budget-value"),
    daybudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthsavingsValue = document.querySelector(".monthsavings-value"),
    yearsavingsValue = document.querySelector(".yearsavings-value"),
    expensesItem = document.querySelectorAll(".expenses-item"),
    confirmBtnOne = document.getElementsByTagName("button")[0],
    confirmBtnTwo = document.getElementsByTagName("button")[1],
    deemBtn = document.getElementsByTagName("button")[2],
    optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    savings = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

console.log(startBtn);
console.log(budgetValue);
console.log(daybudgetValue);
console.log(levelValue);
console.log(expensesValue);
console.log(optionalexpensesValue);
console.log(incomeValue);
console.log(monthsavingsValue);
console.log(yearsavingsValue);
console.log(expensesItem);
console.log(confirmBtnOne);
console.log(confirmBtnTwo);
console.log(deemBtn);
console.log(optionalexpensesItem);
console.log(chooseIncome);
console.log(savings);
console.log(chooseSum);
console.log(choosePercent);
console.log(yearValue);
console.log(monthValue);
console.log(dayValue);




/*

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
    savings: true,
    chooseExpenses: function () {
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
    },

    detectDayBudget: function () {
      budgetOneDay = (appData.budget / 30).toFixed(1);
      alert("бюджет на 1 день " + budgetOneDay);      
    },

    detectLevel: function () {
      if (budgetOneDay < 1000) {
        console.log("У вас милимальный уровень достатка");
      } else if (budgetOneDay > 1000 && budgetOneDay < 5000) {
        console.log("У вас средний уровень достатка");
      } else if (budgetOneDay > 5000){
        console.log("У вас высокий уровень достатка");
      } else {
        console.log("Ошибка!");
      }      
    },

    checkSavings: function () {
      if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
    
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита " + appData.monthIncome)
      }      
    },

    chooseOptExpenses: function () {
      let optionalExp;

      for (let i = 0; i < 3; i++) {
        optionalExp = prompt("Статья необязательных расходов?");
        if ( (typeof(optionalExp)) === 'string' && optionalExp != '' && optionalExp.length < 50) {
              console.log("done");
              appData.optionalExpenses[i+1] = optionalExp;
        } else {
            i--;
        }
      }      
    },

    chooseIncome: function () { 
      for (let i = 0; i < 1; i++) {
        
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');

        if ( (typeof(items)) === 'string' && items != '') {
          appData.income = items.split(', ');
          appData.income.push(prompt("Может что-то еще?"));
          appData.income.sort();
          appData.income.forEach(function(items, i){
            document.writeln("Способ доп. заработка - " + ++i + ": " + items + "</br>");
          }); 
        } else {
            i--;
        } 
      }

      for (let key in appData) {
        console.log("Наша программа включает в себя данные:" + key + ": " + appData[key]);
      }
    }
};
*/
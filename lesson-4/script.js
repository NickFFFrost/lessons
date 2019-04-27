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

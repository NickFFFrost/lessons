'use strict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    mandatoryExp = prompt("Введите обязательную статью расходов в этом месяце"),
    cost = prompt("Во сколько обойдется?"),
    mandatoryExpTwo = prompt("Введите обязательную статью расходов в этом месяце"),
    costTwo = prompt("Во сколько обойдется?");
  
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.expenses[mandatoryExp] = cost;
appData.expenses[mandatoryExpTwo] = costTwo;

let budgetOneDay = (money - appData.expenses[mandatoryExp] - appData.expenses[mandatoryExpTwo]) / 30;

alert("бюджет на 1 день " + budgetOneDay);

console.log(appData);
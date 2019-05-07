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
    dayValue = document.querySelector(".day-value"),
    items1 = document.querySelector('#expenses_1'),
    items2 = document.querySelector('#expenses_2'),
    items3 = document.querySelector('#expenses_3'),
    items4 = document.querySelector('#expenses_4'),
    optionalexpenses1 = document.querySelector('#optionalexpenses_1'),
    optionalexpenses2 = document.querySelector('#optionalexpenses_2'),
    optionalexpenses3 = document.querySelector('#optionalexpenses_3');



let money,time,budgetOneDay,OneDay;

startBtn.addEventListener("click", function(){
  time = prompt("Введите дату в формате YYYY-MM-DD");
  money = +prompt("Ваш бюджет на месяц?");

  while ( isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на месяц?");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();

  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDay();
});


confirmBtnOne.addEventListener("click", function(){
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let mandatoryExp = expensesItem[i].value,
        cost = expensesItem[++i].value;
  
    if ( mandatoryExp != '' && mandatoryExp != null && mandatoryExp.length < 50 && cost != null && cost != '') {
          console.log("done");
          appData.expenses[mandatoryExp] = cost;
          OneDay = sum += +cost;
    } else {
      expensesValue.textContent = "Ошибка!!";
    }
    expensesValue.textContent = sum;
  }  
});

for (let i = 0; i < expensesItem.length; i++){
  confirmBtnOne.disabled = true;
  expensesItem[i].addEventListener('input', function () {
      if (items1.value != '' && items2.value != '' && appData.budget > 0) {
        confirmBtnOne.disabled = false;
      } else if (items3.value != '' && items4.value != '') {
        confirmBtnOne.disabled = false;
      } else {
        confirmBtnOne.disabled = true;
      }
  })
}



confirmBtnTwo.addEventListener("click", function(){
  let optionalExp;
  optionalexpensesValue.textContent = ' ';
  for (let i = 0; i < optionalexpensesItem.length; i++) {
    optionalExp = optionalexpensesItem[i].value;
    if ( (typeof (optionalExp)) === 'string' && typeof (optionalExp) != '' && typeof (optionalExp) != null && optionalExp.length < 50)  {
        console.log("done");
        appData.optionalExpenses[i] = optionalExp;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
    } else {
        i--;
    }
  }     
});


for (let i = 0; i < optionalexpensesItem.length; i++){
  confirmBtnTwo.disabled = true;
  optionalexpensesItem[i].addEventListener('input', function () {
      if (optionalexpensesItem.value != '' && appData.budget > 0) {
        confirmBtnTwo.disabled = false;
      } else {
        confirmBtnTwo.disabled = true;
      }
  })
}


deemBtn.addEventListener("click", function(){

  if (appData.budget != undefined){
    budgetOneDay = ((appData.budget - OneDay) / 30).toFixed(1);
    daybudgetValue.textContent = budgetOneDay;
  
    if (budgetOneDay < 1000) {
      levelValue.textContent = "У вас милимальный уровень достатка";
    } else if (budgetOneDay > 1000 && budgetOneDay < 5000) {
      levelValue.textContent = "У вас средний уровень достатка";
    } else if (budgetOneDay > 5000){
      levelValue.textContent = "У вас высокий уровень достатка";
    } else {
      levelValue.textContent = "Ошибка!";
    }    
  } else {
    daybudgetValue.textContent = "Ошибка!";
  }
});

chooseIncome.addEventListener("input", function() { 
    let items = chooseIncome.value;
      appData.income = items.split(', ');
      incomeValue.textContent = appData.income;
});

savings.addEventListener("click", function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else{
    appData.savings = true;
  }
});

chooseSum.addEventListener("input", function() {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
        percent = +choosePercent.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

choosePercent.addEventListener("input", function() {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
        percent = +choosePercent.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);  
  }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

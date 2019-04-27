    chooseIncome: function () {
      let items = "",
          itemTwo = "";
      
      while (items === '' || !isNaN(+items) && itemTwo === '' || !isNaN(+itemTwo)) {
        items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
        itemTwo = prompt("Может что-то еще?");
      }
      appData.income = items.split(', ');
      appData.income.push(itemTwo);
      appData.income.sort();

      appData.income.forEach(function(item, i, mass){
        alert(i);
      });
    }
'use strict';

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let a;
let b;

let time = prompt("Введите дату в формате YYYY-MM-DD", '');
let	money = +prompt("Ваш бюджет на месяц?", 'Число');

while ( money == undefined || money == null || money == '' || !isNumeric(money) ) { //тут проверка работает
	money = prompt("Ваш бюджет на месяц?", '');
}

while ( time == undefined || time == null || time == '' ) { //тут проверка работает
	time = prompt("Введите дату в формате YYYY-MM-DD", '');
}

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};

appData.budget = money;
appData.timeData = time;

for(let i = 0; i < 2; i++){
	a = +prompt("Введите обязательную статью расходов в этом месяце", 'Число');
	b = +prompt("Во сколько обойдется?", 'Число');

	while ( a == undefined || a == null || a == '' || !isNumeric(a) ) { //тут проверка работает
		a = +prompt("Введите обязательную статью расходов в этом месяце", 'Число');
	}

	while ( b == undefined || b == null || b == '' || !isNumeric(b) ) { //тут проверка работает
		b = +prompt("Во сколько обойдется?", 'Число');
	}

	appData.expenses[a] = b;

}




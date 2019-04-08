'use strict';

let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');


let appData = {
	money: money,
	time: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", '');
let a2 = prompt("Во сколько обойдется?", "");
let a3 = prompt("Введите обязательную статью расходов в этом месяце", '');
let a4 = prompt("Во сколько обойдется?", "");


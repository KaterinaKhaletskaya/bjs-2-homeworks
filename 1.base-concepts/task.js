"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	let d = Math.pow(b, 2) - 4 * a * c;
	let x1;
	let x2;

	if (d == 0) {
		x1 = -b / (2 * a);
		arr.push(x1);
	} else if (d > 0) {
		x1 = (-b + Math.sqrt(d)) / (2 * a);
		x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	};

	return arr;

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let interestRate = (percent / 100) / 12;
	let loanBody = amount - contribution;
	let monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** countMonths) - 1)));


	return Number((monthlyPayment * countMonths).toFixed(2));


}
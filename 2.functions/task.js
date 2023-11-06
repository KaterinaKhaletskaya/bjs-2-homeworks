function getArrayParams(...arr) {

	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}

	let avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {

	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	if (!arr.length == 0) {
		return sum;
	}
	return 0;


}

function differenceMaxMinWorker(...arr) {

	let min = arr[0];
	let max = arr[0];


	for (let i = 0; i < arr.length; i++) {

		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}

	if (!arr.length == 0) {
		return max - min;
	}
	return 0;

}

function differenceEvenOddWorker(...arr) {

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else(sumOddElement += arr[i]);
	}
	if (!arr.length == 0) {
		return sumEvenElement - sumOddElement;
	}
	return 0;

}

function averageEvenElementsWorker(...arr) {

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}

	}
	if (!arr.length == 0) {
		return sumEvenElement / countEvenElement;
	}
	return 0;

}

function makeWork(arrOfArr, func) {

	let maxWorkerResult = -Infinity;


	for (let i = 0; i < arrOfArr.length; i++) {
		let result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}

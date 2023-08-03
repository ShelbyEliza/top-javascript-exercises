const fibonacci = function (number) {
	let realNumber = parseInt(number);
	if (realNumber < 0) {
		return "OOPS";
	}
	if (realNumber === 0) {
		return 0;
	}
	let fibArr = [1, 1];
	for (let i = 0; i < realNumber - 2; i++) {
		let nextNumber = fibArr[i] + fibArr[i + 1];
		fibArr.push(nextNumber);
	}
	return fibArr[realNumber - 1];
};

// Do not edit below this line
module.exports = fibonacci;

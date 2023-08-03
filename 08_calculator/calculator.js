const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function (array) {
	return array.reduce((total, current) => total * current);
};

const power = function (a, b) {
	return a ** b;
};

const factorial = function (number) {
	if (number < 0) {
		return -1;
	} else if (number == 0) {
		return 1;
	} else {
		return number * factorial(number - 1);
	}
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};

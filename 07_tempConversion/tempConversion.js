// Deduct 32, then multiply by 5, then divide by 9
const convertToCelsius = function (fahrenheit) {
	let celsius = ((fahrenheit - 32) * 5) / 9;
	return Number.isInteger(celsius) ? celsius : Number(celsius.toFixed(1));
};
// Divide by 5, then multiply by 9, then add 32
const convertToFahrenheit = function (celsius) {
	let fahrenheit = (celsius / 5) * 9 + 32;
	return Number.isInteger(fahrenheit)
		? fahrenheit
		: Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};

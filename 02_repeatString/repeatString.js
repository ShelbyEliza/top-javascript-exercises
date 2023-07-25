const repeatString = function (str, amount) {
	let result = "";
	if (amount < 0) {
		result = "ERROR";
	} else {
		for (let i = 0; i < amount; i++) {
			result = result.concat("", str);
		}
	}
	return result;
};

// Do not edit below this line
module.exports = repeatString;

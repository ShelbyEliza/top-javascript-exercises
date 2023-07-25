const sumAll = function (firstVal, secondVal) {
	function checkIfValid(value) {
		if (typeof value === "number" && value > 0) {
			return true;
		} else {
			return false;
		}
	}

	if (checkIfValid(firstVal) && checkIfValid(secondVal)) {
		let sum = 0;
		let lowVal;
		let highVal;
		if (firstVal > secondVal) {
			lowVal = secondVal;
			highVal = firstVal;
		} else {
			lowVal = firstVal;
			highVal = secondVal;
		}

		for (let i = lowVal; i <= highVal; i++) {
			sum += i;
		}
		return sum;
	} else {
		return "ERROR";
	}
};

// Do not edit below this line
module.exports = sumAll;

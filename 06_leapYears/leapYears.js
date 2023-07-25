const leapYears = function (year) {
	let result;
	function isDivisibleByNumber(year, divider) {
		return year % divider == 0 ? (result = true) : (result = false);
	}

	if (isDivisibleByNumber(year, 4) === true) {
		if (isDivisibleByNumber(year, 100)) {
			if (isDivisibleByNumber(year, 400) == true) {
				result = true;
			} else {
				result = false;
			}
		} else {
			result = true;
		}
	} else {
		result = false;
	}
	return result;
};

// Do not edit below this line
module.exports = leapYears;

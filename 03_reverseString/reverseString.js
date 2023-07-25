const reverseString = function (word) {
	let result = "";
	let j = word.length - 1;
	for (let i = 0; i < word.length; i++) {
		result += word[j - i];
	}
	return result;
};

// Do not edit below this line
module.exports = reverseString;

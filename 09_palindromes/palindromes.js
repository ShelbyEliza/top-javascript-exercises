const palindromes = function (text) {
	const simpleText = text.replace(/[^\w\']|_/g, "").toUpperCase();
	let reverse = simpleText.split("").reverse().join("");
	return reverse === simpleText;
};

// Do not edit below this line
module.exports = palindromes;

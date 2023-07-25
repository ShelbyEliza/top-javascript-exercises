const removeFromArray = function (array, ...theArgs) {
	return array.filter((item) => {
		if (!theArgs.includes(item)) {
			return item;
		}
	});
};

// Do not edit below this line
module.exports = removeFromArray;

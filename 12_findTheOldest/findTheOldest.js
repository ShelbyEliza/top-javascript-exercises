const findTheOldest = function (array) {
	array.map((person) => {
		if (!person.yearOfDeath) {
			const currentYear = new Date().getFullYear();
			person.age = currentYear - person.yearOfBirth;
		} else {
			person.age = person.yearOfDeath - person.yearOfBirth;
		}
		return person;
	});
	array.sort((first, second) => {
		return second.age - first.age;
	});
	return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;

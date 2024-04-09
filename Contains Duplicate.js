/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate1 = function (nums) {
	// removing all duplicates
	let filteredNums = new Set(nums);
	// if even 1 duplicate was removed, then length would be different, so duplicate exists
	return +nums.length !== +filteredNums.size;
};

var containsDuplicate2 = function (nums) {
	// sort all numbers ASC
	let sorted = nums.sort((a, b) => a - b);
	// if current number equel to the next number, then duplicate exists
	return sorted.some((_, i) => sorted[i] === sorted[i + 1]);
};

var containsDuplicate3 = function (nums) {
	let hashTable = {};
	for (const i of nums) {
		// if hash item already exist with same key, then its duplicate
		if (hashTable[i]) {
			return true;
		} else {
			hashTable[i] = true;
		}
	}
	return false;
};

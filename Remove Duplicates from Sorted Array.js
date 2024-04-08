/**
 * @param {number[]} nums
 * @return {number}
 */

let removeDuplicates1 = function (nums) {
	// counter of unique numbers
	let k = 0;
	for (let i = 0; i < nums.length; i++) {
		// finding first unique element of the array and if it coincide with 'i' then it is on the right place
		if (nums.indexOf(nums[i]) === i) {
			// if number in the right place then push it to the index of current uniqie numbers count
			nums[k] = nums[i];
			// and increase numbers of unique numbers by 1;
			k++;
		}
	}
	return k;
};

let removeDuplicates2 = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		// checking if number have dublicate, by comparing current number with previous number
		if (nums[i] === nums[i - 1]) {
			// if dublicate exist we removing it from array
			nums.splice(i, 1);
			// and decreasing our loop step by 1, to prevent number skipping
			i--;
		}
	}
	return nums.length;
};

let removeDuplicates3 = function (nums) {
	// with 'new Set' removing all dublicates from 'nums' array
	let uniqueNums = new Set(nums);
	// we just removing all numbers from array method (to make blank array) and put into it only unique numbers
	nums.splice(0, nums.length, ...uniqueNums);
	return nums.length;
};

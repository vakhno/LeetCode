/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	// sometimes 'k' can be larger then 'nums' length, but we need to be sure that 'k' is in the range [0, nums.length-1] for correct calculations
	// example: 'rotate([1,2,3,4,5], 6)', so 'nums.length < k', its mean that 'k' should be 'k % nums.length === 1' (technically k = 6 and k = 1 is the same, but to avoid any errors we should use '%' operator)
	k %= nums.length;
	// checking if array have more that 1 element
	if (nums.length > 1) {
		// getting array of numbers that should be replaced
		let reversePart = nums.slice(nums.length - k, nums.length);
		// removing numbers from 'nums'
		nums.splice(nums.length - k, k);
		// push 'reversePart' at the beginning of the 'nums' array
		nums.splice(0, 0, ...reversePart);
	}
};

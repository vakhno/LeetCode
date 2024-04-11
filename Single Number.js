/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber1 = function (nums) {
	return nums
		.sort((a, b) => a - b)
		.find(
			(num, index) =>
				index === nums.length - 1 || (num !== nums[index + 1] && num !== nums[index - 1]),
		);
};

var singleNumber1 = function (nums) {
	let XOR = 0;
	for (let i = 0; i < nums.length; i++) {
		// the point of it a ^ 0 = a, but a ^ a = 0, so in first iteration XOR will be equal to nums[1]
		// The key point is that the XOR operation is commutative and associative, meaning that the order of operands does not matter, and grouping of operations does not change the result. So, when the same number appears twice, it cancels itself out, leaving only the single number that appears once in the array.
		XOR = XOR ^ nums[i];
	}
	return XOR;
};

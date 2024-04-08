/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let profit = 0;
	for (let i = 0; i < prices.length - 1; i++) {
		// check if 'i' is not the last day, because it makes no sense to buy it on the last day (you cant sell it)
		if (i !== prices.length) {
			// if we have a profit of buiyng it today and selling it tomorrow
			if (prices[i + 1] - prices[i] > 0) {
				// if this profit exists, lets sum it
				profit += prices[i + 1] - prices[i];
			}
		}
	}
	return profit;
};

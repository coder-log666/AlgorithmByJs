/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/submissions/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

  let min = prices[0];
  let res = 0;

  for (let i = 1; i < prices.length; i++) {

    if (prices[i] <= min) {
      min = prices[i];

    } else {
      res = Math.max(res, prices[i] - min);
    }
    
  }

  return res;
};

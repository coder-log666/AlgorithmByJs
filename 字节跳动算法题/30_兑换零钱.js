/**
 * 球球交流小组：194477865
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(Infinity)
    dp[0] = 0
    for(let i=1; i<=amount; i++) {
        for(let coin of coins) {
            if (i-coin < 0) {
                continue
            } 
            dp[i] = Math.min( dp[i-coin] + 1, dp[i])
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};
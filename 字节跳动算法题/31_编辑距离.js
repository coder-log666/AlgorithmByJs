/**
 * 球球交流小组：194477865
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let dp = new Array(word1.length+1)
    for(let i=0; i<dp.length; i++) {
        dp[i] = new Array(word2.length+1).fill(0)
    }

    //初始化编辑
    for(let i=1; i<word1.length+1; i++) {
        dp[i][0] = i
    }

    for(let i=1; i<word2.length+1; i++) {
        dp[0][i] = i
    }

    for(let i=1; i<word1.length+1; i++) {
        for(let j=1; j<word2.length+1; j++) {
            let left = dp[i][j-1]
            let top = dp[i-1][j]
            let lt = dp[i-1][j-1]
            if (word1[i-1] === word2[j-1]) {
                dp[i][j] = lt 
            } else {
                dp[i][j] = Math.min(left, Math.min(top, lt)) + 1
            }
        }
    }
    return dp[word1.length][word2.length]
}
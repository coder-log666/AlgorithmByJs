/**
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s
    }

    let dp = new Array(s.length)
    for (let i=0; i<s.length; i++) {
        dp[i] = new Array(s.length).fill(0)
    }

    for(let i=0; i<s.length; i++) {
        dp[i][i] = 1
    }

    let begin = 0
    let maxLength = 1
    for (let len=2; len<=s.length; len++) {
        for (let i=0; i<s.length; i++) {
            let j = len + i - 1
            if (s[i] != s[j]) {
                dp[i][j] = 0
            } else {
                if (len == 2) {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = dp[i+1][j-1]
                }
            }

            if (dp[i][j]==1 && j-i+1 > maxLength) {
                begin = i
                maxLength = j-i+1
            }
        }
    }

    return s.substring(begin, begin + maxLength)

};
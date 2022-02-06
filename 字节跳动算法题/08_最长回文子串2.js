/**
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let begin = 0
    let end = 0
    let maxLength = 1
    for(let i=0; i<s.length; i++) {
        let len1 = aroundCenter(s, i, i)
        let len2 = aroundCenter(s, i, i+1)
        let len = Math.max(len1, len2)
        if (len > maxLength) {
            maxLength = len
            begin = i - parseInt((len-1)/2)
            end = i + parseInt((len)/2)
        }

    }
    return s.substring(begin, end+1)
}

var aroundCenter = function(s, left, right) {
    let l = left
    let r = right
    while(l>=0 && r<s.length && s[l] == s[r]) {
        l--
        r++
    }

    return r - l - 1

}


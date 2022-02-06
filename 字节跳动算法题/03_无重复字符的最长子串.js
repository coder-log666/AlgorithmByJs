/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let begin = 0
    let maxLength = 0
    let map = {}
    for(let i=0; i<s.length; i++){
        let ch = s[i]
        if (!map.hasOwnProperty(ch)) {
            map[ch] = i
        } else {
            maxLength = Math.max(maxLength, i - begin)
            begin = map[ch] < begin ? begin : map[ch] + 1
            map[ch] = i
        }
    }

    maxLength = Math.max(s.length-begin, maxLength)
    return maxLength
};
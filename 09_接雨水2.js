/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let sum = 0
    for (let i=1; i<height.length-1; i++) {
        let leftMax = 0
        for (let k=0; k<i; k++) {
            leftMax = Math.max(leftMax, height[k])
        }

        let rightMax = 0
        for(let k=i+1; k<s.length; k++) {
            rightMax = Math.max(rightMax, s[k])
        }

        let minMax = Math.min(leftMax, rightMax)
        if (s[i] < minMax) {
            sum =  sum + (minMax - s[i])
        }
    }
    return sum
};
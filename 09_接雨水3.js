/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMax = new Array(height.length).fill(0)
    for(let i=2; i<height.length; i++) {
        leftMax[i] = Math.max(leftMax[i-1], height[i-1])
    }

    let rightMax = new Array(height.length).fill(0)
    for(let i=s.length-2; i>=0; i--) {
        rightMax[i] = Math.max(rightMax[i+1], height[i+1])
    }

    let sum = 0
    for (let i=2; i<height.length-1; i++) {
        let minMax = Math.min(leftMax[i], rightMax[i])
        if (minMax > height[i]) {
            sum = sum + (minMax - height[i])
        }
    }
    return sum
    
};
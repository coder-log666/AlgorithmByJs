/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxHeight = getMaxHeight(height)

    let sum = 0
    for (let i=1; i<=maxHeight; i++) {
        
        let flag = false // 
        let tempsum = 0
        for(let j=0; j<height.length; j++) {
            if (height[j] >= i) {
                flag = true
                sum = sum + tempsum
                tempsum = 0
            } else if (flag){
                tempsum++
            }
        }
    }
    return sum
};  

var getMaxHeight = function(height) {
    let maxHeight = 0
    for(let i=0; i<height.length; i++) {
        maxHeight = Math.max(maxHeight, height[i])
    }

    return maxHeight
}
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left_max = 0
    let right_max = 0
    let left = 0
    let right = s.length-1
    let sum = 0
    while(left<right) {
        left_max = Math.max(left_max, height[left])
        right_max = Math.max(right_max, height[right])

        if (height[left] <= height[right]) {
            sum = sum + (left_max - height[left])
            left++
        } else {
            sum = sum + (right_max - height[right])
            right--
        }
    }
    return sum
};

/**
 * https://leetcode-cn.com/problems/two-sum/
 * o(n^2)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        let num1 = nums[i]
        let num2 = target - num1
        for(let j=i+1; j<nums.length; j++) {
            if (nums[j] == num2) {
                return [i, j]
            }
        }
    }
    return [0, 0]
};

var twoSum = function(nums, target) {
    let map = {}
    for(let i=0; i<nums.length; i++) {
        let num1 = nums[i]
        let otherTarget = target - num1
        if(map.hasOwnProperty(otherTarget)) {
            return [map[otherTarget], i]
        } else {
            map[num1] = i
        }
    }

    return [0, 0]
};
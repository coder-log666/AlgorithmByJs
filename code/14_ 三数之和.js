/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(sortNum)
    let res = []
    for (let i=0; i<nums.length-1; i++) {
        if (nums[i] > 0) break
        if (i>0 && nums[i] == nums[i-1]) continue //去重
        let left = i+1
        let right = nums.length-1
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum > 0) {
                right--
            } else if (sum < 0) {
                left ++
            } else {
                res.push([nums[i], nums[left], nums[right]])
                while(left<right && nums[left] == nums[left+1]) {
                    left++
                }
                while(left<right && nums[right] == nums[right-1]) {
                    right--
                }
                left++
                right--
            }
        }

    }
    return res
};

var sortNum = function(a, b) {
    return a - b 
}
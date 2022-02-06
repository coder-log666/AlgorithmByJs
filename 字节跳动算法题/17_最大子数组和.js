/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let f = []
    f[0] = nums[0]
    let ans = f[0]
    for(let i=1; i<nums.length; i++) {
        f[i] = Math.max(f[i-1]+nums[i], nums[i])
        ans = Math.max(ans, f[i])
    }
    return ans
};


/**
 * 代码优化
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let pre = nums[0]
    let ans = nums[0]

    for(let i=1; i<nums.length; i++) {

        pre  = Math.max(pre+nums[i], nums[i])
        
        ans = Math.max(ans, pre)

    }
    return ans
};

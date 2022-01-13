/**
 * https://leetcode-cn.com/problems/next-permutation/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    while(i>=0) {
        if (nums[i]<nums[i+1]) {
            break
        }
        i--
    }

    if (i >= 0) {
        for(let k=nums.length-1; k>=(i+1); k--) {
            if (nums[k]>nums[i]) {
                swap(nums, i, k)
                break
            }
        }
    }

    reverse(nums, i+1, nums.length-1)

};

var swap = function(nums, i, k) {
    let temp = nums[i]
    nums[i] = nums[k]
    nums[k] = temp
}

var reverse = function(nums, left, right) {
    let l = left
    let r = right
    while(l<r) {
        swap(nums, l, r)
        l++
        r--
    }
}
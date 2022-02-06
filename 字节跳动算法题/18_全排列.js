/**
 * https://leetcode-cn.com/problems/permutations/submissions/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = new Array()
    let path = new Array()
    let depth = 0
    let use = new Array(nums.length).fill(0)
    dfs(nums, depth, path, use, res)
    return res

};

var dfs = function(nums, depth, path, use, res) {
    if (depth == nums.length) {
        let a = [].concat(path)
        res.push(a)
        return
    }

    for(let i=0; i<nums.length; i++) {
        if (use[i]) {
            continue
        }
        depth++
        use[i]=1
        path.push(nums[i])
        dfs(nums, depth, path, use, res)
        path.pop()
        use[i] = 0
        depth--
    }

}
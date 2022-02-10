/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (root == null) return []
    let res = []
    dfs(root, 0, res)
    return res
};

var dfs = function(root, depth, res) {
    if (root == null) {
        return
    }
    if (depth == res.length) {
        res.push(root.val)
    }
    depth++
    dfs(root.right, depth, res)
    dfs(root.left, depth, res)
}
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
    let levelArray = [root]
    let res = []
    let node = root

    while(levelArray.length > 0) {
        let size = levelArray.length
        for(let i=0; i<size; i++) {
            let node = levelArray.shift()
            if (i==size-1) {
                res.push(node.val)
            }
            if (node.left) {
                levelArray.push(node.left)
            }
            if (node.right) {
                levelArray.push(node.right)
            }
        }
    }
    return res
};
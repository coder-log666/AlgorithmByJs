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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {

    if (root == null) {
        return []
    }
    let res = []
    let isLeft = true
    let queue = []
    queue.push(root)

    while(queue.length) {
        let size = queue.length
        let levelArray = []
        for(let i=0; i<size; i++) {
            let node = queue.shift()
            if (isLeft) {
                levelArray.push(node.val)
            } else {
                levelArray.unshift(node.val)
            }
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        isLeft = !isLeft
        res.push(levelArray)
    }


    return res

};
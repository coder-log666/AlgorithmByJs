/**
 * 球球交流小组：194477865
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (root == null) return []
    let levelArray = [root]
    let res = []

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
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummyNode = new ListNode(null, head)
    let preleftNode = dummyNode
    for(let i=0; i<left-1; i++)  {
        preleftNode = preleftNode.next
    }
    let leftNode = preleftNode.next

    let preLeft = leftNode
    for (let i=left+1; i<=right; i++) {
        let cur = leftNode.next
        let curNext = cur.next

        preleftNode.next = cur
        cur.next = preLeft
        leftNode.next = curNext
        preLeft = cur
    }
    return dummyNode.next
   
};

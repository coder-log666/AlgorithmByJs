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

    let rightNode = dummyNode
    for(let i=0; i<right; i++)  {
        rightNode = rightNode.next
    }
    let r1 = rightNode.next
    rightNode.next = null

    let res = reverseList(leftNode)
    preleftNode.next = res
    leftNode.next = r1

    return dummyNode.next
};

var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head
    }
    let temp = null
    let cur = head
    let next = head
    while(cur != null) {
        next = cur.next
        cur.next = temp
        temp = cur
        cur = next
    }
    return temp
};
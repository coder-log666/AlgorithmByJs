/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
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
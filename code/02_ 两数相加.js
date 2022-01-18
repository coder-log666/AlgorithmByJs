/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let flag = 0
    let l3 = new ListNode(null, null)
    let res = l3

    while(l1 || l2) {
        let val1 = l1 ? l1.val1 : 0
        let val2 = l2 ? l2.val2 : 0
        let val = val1 + val2 + flag
        flag = val >= 10 ? 1 : 0
        val = val >= 10 ? val-10 : val
        let node = new ListNode(val, null)
        l3.next = node
        l3 = l3.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }

    if (flag == 1) {
        l3.next = new ListNode(1, null)
    }

    return res.next

};
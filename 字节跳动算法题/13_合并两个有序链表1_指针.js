/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/submissions/
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    if (list1 == null) {
        return list2
    } else if (list2 == null) {
        return list1
    }

    let dummyNode = new ListNode(null, null)
    let pre = dummyNode

    let L1 = list1
    let L2 = list2
    while(L1 != null && L2 != null) {
        if (L1.val <= L2.val) {
            pre.next = L1
            L1 = L1.next
            pre = pre.next
        } else {
            pre.next = L2
            L2 = L2.next
            pre = pre.next
        }
    }

    if (L1 != null) {
        pre.next = L1 
    } else if (L2 != null) {
        pre.next = L2
    }

    return dummyNode.next


};
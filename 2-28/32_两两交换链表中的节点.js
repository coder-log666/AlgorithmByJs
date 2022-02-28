/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    let dummyNode = new ListNode(-1, head)
    
    let pre = dummyNode
    let first = dummyNode.next
    let second = first ? first.next : null
    while(first && second) {
        first.next = second.next
        second.next = first
        pre.next = second

        pre = first
        first = first ? first.next : null
        second = first ? first.next : null
    }
    return dummyNode.next
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let node = head
    let middleNode = findMiddleNode(node)
    let resNode = reverseList(middleNode)
    let left = head
    let right = resNode
    while(right.next) {
        let leftNext = left.next
        let rightNext = right.next
        left.next = right
        right.next = leftNext
        left = leftNext
        right = rightNext
    }
    return head


};

var findMiddleNode = function(head) {
    let slow = head
    let fast = head
    while(fast && fast.next) {
        slow = slow.next 
        fast = fast.next.next
    }
    return slow
}

var reverseList = function(head) {
    let node = head
    let pre = null
    while(node) {
        let next = node.next
        node.next = pre
        pre = node 
        node = next
    }
    return pre
}
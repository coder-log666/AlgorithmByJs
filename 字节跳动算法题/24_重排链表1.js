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
    let list = []
    let node = head
    while(node != null) {
        list.push(node)
        node = node.next
    }
    let left = 0
    let right = list.length-1
    while(left<right) {
        list[left].next = list[right]
        left++
        if (left == right) {
            break
        }
        list[right].next = list[left]
        right--

    }
    list[right].next = null
    return list[0]

};
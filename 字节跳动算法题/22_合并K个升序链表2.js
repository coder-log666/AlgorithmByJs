/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    return merge(lists, 0, lists.length-1)


};


var merge = function(list, left, right) {
    if (left == right) {
        return list[left]
    }
    if (left > right) {
        return null
    }

    let m = parseInt((left+right)/2)
    return mergeTwoList(merge(list, left, m), merge(list, m+1, right))

    
}



var mergeTwoList = function(list1, list2) {
    let dummyNode = new ListNode(null, null)
    let tail = dummyNode
    let l1 = list1
    let l2 = list2

    while(l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1
            l1 = l1.next
        } else {
            tail.next = l2
            l2 = l2.next
        }
        tail = tail.next
    }

    tail.next = l1==null ? l2 : l1

    return dummyNode.next
}
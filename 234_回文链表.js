/**
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 */

/**
找到中间节点：
5 -> 5
5 6 -> 5

5 6 7 -> 6
5 6 7 8 -> 6
 */
var findMiddle = function(head) {
    let fast = head;
    let slow = head;
    // 易错点
    while(fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

/**
反转链表
 1  2   3 -> 3 2 1
head
 */
var invertList = function(head) {
    var tmpNode = null;
    var nHead = head;
    while(nHead != null) {
        var next = nHead.next;
        nHead.next = tmpNode;
        tmpNode = nHead;
        nHead = next;
    }
    return tmpNode;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head == null) {
        return true;
    }

    var mid = findMiddle(head);
    var nHead = invertList(mid.next);
    
    var result = true;
    while (result && nHead != null ) {
        if (head.val == nHead.val) {
            head = head.next;
            nHead = nHead.next;
        } else {
            result = false
        }
    }

    return result;
};
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
    if (lists == null) return null

    let queue = new priorityQueue()
    for(let list of lists) {
        if (list == null) {
            continue
        }
        queue.offer({
            code: list.val,
            ptr: list
        })
    }

    let dummyNode = new ListNode(null, null);
    let tail = dummyNode

    while(!queue.isEmpty()) {
        let e = queue.poll()
        tail.next = e.ptr
        tail = tail.next
        if (e.ptr.next != null) {
            queue.offer({
                code: e.ptr.next.val,
                ptr: e.ptr.next
            })
        }
        
    }
    return dummyNode.next
};


var priorityQueue = function() {
    this.datasource = []
}

priorityQueue.prototype.isEmpty = function() {
    return this.datasource.length == 0
}

priorityQueue.prototype.offer = function(element) {
    this.datasource.push(element)
}

priorityQueue.prototype.poll = function() {
    if (this.datasource.length == 0) {
        return null
    }
    let priorityIndex = 0
    let priority = this.datasource[0]
    for (let i=0; i<this.datasource.length; i++) {
        if (this.datasource[i].code < priority.code) {
            priority = this.datasource[i]
            priorityIndex = i
        }
    }
    return this.datasource.splice(priorityIndex, 1)[0]
}
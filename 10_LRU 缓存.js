var doubleLinkList = function(pre, next, key, value) {
    this.pre = pre
    this.next = next
    this.key = key
    this.value = value
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = {}
    this.head = new doubleLinkList(null, null, -1, -1)
    this.tail = new doubleLinkList(null, null, -2, -1)
    this.head.next = this.tail
    this.tail.next = this.head
    this.capacity = capacity
    this.size = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let res = -1
    if (this.map.hasOwnProperty(key)) {
        let node = this.map[key]
        res = node.value
        //删除节点
        this.removeNode(node)
        //将key移动到表头
        this.moveToHead(node)
    }
    return res
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    if (this.map.hasOwnProperty(key)) {
        let node = this.map[key]
        node.value = value
        //删除节点
        this.removeNode(node)
        // 将node移动到表头
        this.moveToHead(node)
        
    } else {
        let node = new doubleLinkList(null, null, key, value)
        this.moveToHead(node)
        this.map[key] = node
        this.size++
        if (this.size>this.capacity) {
            delete this.map[this.tail.pre.key]
            this.removeTail()
            this.size--
        }
        
    }

};

LRUCache.prototype.removeNode = function(node) {
    let pre = node.pre
    let next = node.next
    pre.next = next
    next.pre = pre
}

LRUCache.prototype.moveToHead = function(node) {
    let tempNode = this.head.next
    node.next = tempNode
    tempNode.pre = node
    node.pre = this.head
    this.head.next = node
}

LRUCache.prototype.removeTail = function() {
    let tempNode = this.tail.pre.pre
    tempNode.next = this.tail
    this.tail.pre = tempNode
}



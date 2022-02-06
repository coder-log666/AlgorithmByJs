
var doubleLinkList = function(key, value, pre, next) {
    this.key = key
    this.value = value
    this.pre = pre 
    this.next = next
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.size = 0
    this.map = {}
    this.head = new doubleLinkList(-1, -1, null, null)
    this.tail = new doubleLinkList(-1, -1, null, null)
    this.head.next = this.tail
    this.tail.pre = this.head
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.hasOwnProperty(key)) {
        let node = this.map[key]
        //将node移动到head
        this.removeNode(node)
        this.insertHead(node)
        return node.value
    } 
    return -1
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
        //将node移动到head
        this.removeNode(node)
        this.insertHead(node)

    } else {
        let node = new doubleLinkList(key, value, null, null)
        //node 插入到head
        this.insertHead(node)
        this.map[key] = node
        this.size ++
        if (this.size > this.capacity) {
            //将尾部移除
            this.removeTail()
            this.size--
        }
    }
};
LRUCache.prototype.removeNode = function(node) {
    let preNode = node.pre
    preNode.next = node.next
    node.next.pre = preNode
 }


LRUCache.prototype.insertHead = function(node) {
   node.pre = this.head
   node.next = this.head.next
   this.head.next.pre = node
   this.head.next = node
}

LRUCache.prototype.removeTail = function() {
    let removeNode = this.tail.pre
    delete this.map[removeNode.key]
    let pre = this.tail.pre.pre
    pre.next = this.tail
    this.tail.pre = pre
    
}
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    let p = 1 //表示当前已经找了多少个元素
    let pValue = 1 //
    while (p<k) {
        let count = findCount(pValue, n)
        if (p+count>k) {
            pValue = pValue * 10
            p++
        } else {
            pValue++
            p = p + count
        }
    }
    return pValue

    
};

var findCount = function(pValue, n) {
    let cur = pValue
    let next = cru + 1
    let count = 0
    while(cur<=n) {
        count = Math.min(next, n+1) - cur
        cur = cur * 10
        next = cur * 10
    }
    return count
}



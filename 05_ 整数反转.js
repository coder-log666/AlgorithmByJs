/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = x < 0 ? -x : x
    let flag = x < 0 ? -1 : 1
    let dist = 0
    let res = 0

    while(num!=0) {
        dist = num % 10
        num = parseInt(num/10)
        res = res * 10 + dist
        if (res > Math.pow(2,31)-1) {
            return 0
        }
    }

    return res * flag
};
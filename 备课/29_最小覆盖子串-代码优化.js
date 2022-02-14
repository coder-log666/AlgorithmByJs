
/**
 * 球球交流小组：194477865
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let omap = {}
    for (let i=0; i<t.length; i++) {
        if (omap[t[i]]) {
            omap[t[i]] = omap[t[i]] + 1
        } else {
            omap[t[i]] = 1
        }
    }
    let cmap = {}

    let left = 0
    let right = 0
    let num = 0
    let mLeft = 0
    let mRight = -1
    let need = Object.keys(omap).length

    let min = Number.MAX_VALUE
    while(right<s.length) {
        let char = s[right]
        if (omap[char]) {
            cmap[char] = cmap[char] ? cmap[char]+1 : 1
            if (cmap[char] === omap[char]) num++
        }
        while(num === need) {
            let leftChar = s[left]
            if(omap[leftChar]) {
                if (cmap[leftChar] === omap[leftChar]) num--
                cmap[leftChar] = cmap[leftChar] - 1
                if (right-left < min) {
                    min = right-left
                    mLeft = left
                    mRight = right
                }
            }
            left++
        }
        right++
    }
    return s.substring(mLeft, mRight+1)
};
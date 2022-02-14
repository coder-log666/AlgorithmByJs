
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
    let right = -1
    let mLeft = 0
    let mRight = -1
    let min = Number.MAX_VALUE
    while(right<s.length) {
        right++
        if (omap[s[right]]) {
            if (cmap[s[right]]) {
                cmap[s[right]] += 1
            } else {
                cmap[s[right]] = 1
            }
        }
        while (checked(omap, cmap)) {
            let m = right - left
            if (m <min) {
                mLeft = left
                mRight = right
                min = m 
            }
            
            if (omap[s[left]]) {
                cmap[s[left]] -= 1
            }
            left++
        }
        
    }
    return s.substring(mLeft, mRight+1)
};

var checked = function(omap, cmap) {
    let same = true
    for (let key in omap) {
        if (!cmap[key] || cmap[key] < omap[key] ) {
            same = false
            return
        }
    }
    return same
}
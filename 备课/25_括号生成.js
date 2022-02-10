/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    if (n==0) return res
    let open = 0
    let close = 0
    dfs(n, "", res, open, close)
    return res
};


var dfs = function(n, path, res, open, close) {
    if (open > n || open < close) return
    if (path.length==2*n) {
        res.push(path)
        return
    }
    dfs(n, path+'(', res, open+1, close)
    dfs(n, path+')', res, open, close+1)
}
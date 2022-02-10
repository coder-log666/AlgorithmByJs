/**
 * 球球交流小组：194477865
 * @author RiverLi
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let path = []
    let res = []
    let start = 0
    let slength = s.length
    dfs(s, path, res, slength, start)

    return res
};

var dfs = function(s, path, res, notUseLength, start) {
    /*取有效值条件：
    1. path 的长度==4。
    2. 整个字符串的字符全部使用掉。
    */
    if (path.length == 4 && notUseLength == 0) {
        res.push(path.join('.'))
        return
    }

    if (notUseLength < (4-path.length) || notUseLength > (4-path.length) * 3) {
        return
    }

    //取得有效ip段
    
    for (let i=0; i<3; i++) {
        let num = parseInt(s.substring(start, start + i+1))
        if ((num==0 && i==0) || num>0 && num <= 255) {
            path.push(s.substring(start, start + i+1))
            dfs(s, path, res, notUseLength-i-1, start+1+i)
            path.pop()
        }
        //如果第一位是0，不需要进行处理以0开头的数据
        if(num==0 && i==0) {
            break
        }
    }
}
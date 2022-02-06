/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length == 1) {
        return [intervals[0]]
    }
    intervals.sort(sort)
    let result = [intervals[0]]

    for(let i=1; i<intervals.length; i++) {
        let interval = intervals[i]
        let resSize = result.length
        if (interval[0] > result[resSize-1][1]) {
            result.push(interval)
        } else {
            result[resSize-1][1] = Math.max(result[resSize-1][1], interval[1])
        }
    }
    
    return result
};

var sort = function(interval1, interval2) {
    return interval1[0] - interval2[0]
}
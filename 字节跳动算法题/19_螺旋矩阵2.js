/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let rows = matrix.length
    let cols = matrix[0].length

    let left = 0, right = cols-1
    let top = 0, bottom = rows-1

    let res = []

    while(left<right&&top<bottom) {
        for(let col=left; col<=right; col++) {
            res.push(matrix[top][col])
        }
        for(let row=top+1; row<=bottom; row++) {
            res.push(matrix[row][right])
        }
        for(let col=right-1; col>=left; col--) {
            res.push(matrix[bottom][col])
        }
        for(let row=bottom-1; row>=top+1; row--) {
            res.push(matrix[row][left])
        }
        
        left++
        right--
        top++
        bottom--
    }

    if(left == right && top<=bottom) {
        for(let row=top; row<=bottom; row++) {
            res.push(matrix[row][left])
        }

    } else if (bottom == top && left<right) {
        for(let col=left; col<=right; col++) {
            res.push(matrix[bottom][col])
        }
    }

    return res
    
};
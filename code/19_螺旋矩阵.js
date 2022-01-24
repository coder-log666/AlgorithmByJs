/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    let rows = matrix.length
    let cols = matrix[0].length
    
    let total = rows * cols

    let use = new Array(rows)
    for(let i=0; i<rows; i++) {
        use[i] = new Array(cols).fill(0)
    }

    let res = new Array()
    let directions = [[0,1], [1, 0], [0,-1], [-1,0]]
    let directionIndx = 0
    let row = 0
    let col = 0

    for(let i=0; i<total; i++) {

        res.push(matrix[row][col])
        use[row][col] = 1

        let nextRow = row + directions[directionIndx][0]
        let nextCol = col + directions[directionIndx][1]

        if (nextCol < 0 || nextCol >= cols || nextRow >= rows || use[nextRow][nextCol]) {
            directionIndx = (directionIndx+1)%4
        }

        row += directions[directionIndx][0]
        col += directions[directionIndx][1]

    }

    return res
    
};
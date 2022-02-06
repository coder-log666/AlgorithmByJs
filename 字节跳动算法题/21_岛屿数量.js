/**
 * https://leetcode-cn.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let rows = grid.length
    let cols = grid[0].length
    let res = 0
    for(let row = 0; row<rows; row++) {
        for(let col=0; col < cols; col++) {
            if (grid[row][col] == 1) {
                res++
                dfs(grid, row, col)
            }
        }
    }
    return res

};

var dfs = function(grid, row, col) {
    let rows = grid.length
    let cols = grid[0].length

    if (row<0 || row >= rows || col <0 || col >= cols) {
        return
    }

    if (grid[row][col] != 1) {
      
        return
    } 
    grid[row][col] = 2
    dfs(grid, row-1, col)
    dfs(grid, row+1, col)
    dfs(grid, row, col+1)
    dfs(grid, row, col-1)
}
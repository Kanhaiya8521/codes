/**
 * @param {number[][]} grid
 * @return {number}
 */
var m, n;
var solve = function(i, j, grid, vis) {
    if (i < 0 || i >= m || j < 0 || j >= n || vis[i][j] || grid[i][j] === 0) return 0;
    let temp = grid[i][j];
    vis[i][j] = true;
    temp += solve(i + 1, j, grid, vis);
    temp += solve(i - 1, j, grid, vis);
    temp += solve(i, j + 1, grid, vis);
    temp += solve(i, j - 1, grid, vis);
    return temp;
};
var findMaxFish = function(grid) {
    m = grid.length;
    n = grid[0].length;
    let ans = 0;
    let vis = Array.from({ length: m }, () => Array(n).fill(false));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0 && !vis[i][j]) {
                ans = Math.max(ans, solve(i, j, grid, vis));
            }
        }
    }
    return ans;
};
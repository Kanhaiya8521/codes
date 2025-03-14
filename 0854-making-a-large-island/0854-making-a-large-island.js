/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
    const n = grid.length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let islandId = 2; // Start from 2 to differentiate from 1s
    let islandSizes = new Map();

    // Function to perform DFS and mark the island
    const dfs = (r, c, id) => {
        let stack = [[r, c]];
        let size = 0;
        grid[r][c] = id; // Mark as visited with island ID

        while (stack.length) {
            let [x, y] = stack.pop();
            size++;
            for (let [dx, dy] of directions) {
                let nx = x + dx, ny = y + dy;
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] === 1) {
                    grid[nx][ny] = id;
                    stack.push([nx, ny]);
                }
            }
        }
        return size;
    };

    // Step 1: Label each island and store its area
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                islandSizes.set(islandId, dfs(r, c, islandId));
                islandId++;
            }
        }
    }

    let maxIsland = Math.max(...islandSizes.values(), 0); // Default to 0 if no islands

    // Step 2: Check each 0 and compute max possible island size
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) {
                let seen = new Set();
                let newSize = 1;

                for (let [dx, dy] of directions) {
                    let nx = r + dx, ny = c + dy;
                    if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] > 1) {
                        let id = grid[nx][ny];
                        if (!seen.has(id)) {
                            seen.add(id);
                            newSize += islandSizes.get(id);
                        }
                    }
                }
                maxIsland = Math.max(maxIsland, newSize);
            }
        }
    }

    return maxIsland;
};
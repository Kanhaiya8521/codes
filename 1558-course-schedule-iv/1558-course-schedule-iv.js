/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    
     const reachable = Array.from({ length: numCourses }, () => Array(numCourses).fill(false));
    
    for (const [a, b] of prerequisites) {
        reachable[a][b] = true;
    }
    
    for (let k = 0; k < numCourses; k++) {
        for (let i = 0; i < numCourses; i++) {
            for (let j = 0; j < numCourses; j++) {
                if (reachable[i][k] && reachable[k][j]) {
                    reachable[i][j] = true;
                }
            }
        }
    }
    
    return queries.map(([u, v]) => reachable[u][v]);
};
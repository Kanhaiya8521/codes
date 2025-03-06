/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let map = new Map();
    let n = grid.length;
    let ans = [];

    for(let arr of grid) {
        for(let e of arr) {
            if(map.get(e)) {
                ans.push(e);
            } else map.set(e, 1);
        }
    }

    for(let i = 1; i <= (n*n); i++) {
        if(!map.get(i)) {
            ans.push(i);
        }
    }
    return ans;
};
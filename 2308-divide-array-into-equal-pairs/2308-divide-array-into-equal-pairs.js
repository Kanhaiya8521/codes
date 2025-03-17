/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {

    let map = new Map();

    for(let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for(let num of nums) {
        if(map.get(num) % 2 != 0) return false;
    }
    return true;
    
};
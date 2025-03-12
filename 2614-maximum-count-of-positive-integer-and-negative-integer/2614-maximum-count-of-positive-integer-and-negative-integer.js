/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {

    let pi = 0 , ni = 0;

    for(let num of nums) {
        if(num > 0) {
            pi++;
        } else if(num < 0) ni++;
    }
    return Math.max(pi, ni);
};
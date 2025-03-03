/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let lp = [];
    let gp = [];
    let p = [];
    for(let num of nums) {
        if(num < pivot) lp.push(num);
        else if(num > pivot) gp.push(num);
        else p.push(num);
    }
    let i = 0;
    for(let e of lp) {
        nums[i++] = e;
    }
    for(let e of p) {
        nums[i++] = e;
    }
    for(let e of gp) {
        nums[i++] = e;
    }
    return nums;
    
};
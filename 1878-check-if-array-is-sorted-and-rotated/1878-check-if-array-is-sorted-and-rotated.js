/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let rIndex = 0;
    for(let i = 0 ; i < nums.length-1; i++) {
        if(nums[i] > nums[i+1]) rIndex = i+1;
    }
    if(rIndex == 0)return true;
    let ans = [];
    for(let i = rIndex; i < nums.length; i++) {
        ans.push(nums[i]);
    }
    for(let i = 0; i < rIndex; i++) {
        ans.push(nums[i]);
    }
    for(let i = 0 ; i < ans.length -1 ; i++) {
        if(ans[i] > ans[i+1]) return false;
    }
    // if(count) return false;
    return true;
};
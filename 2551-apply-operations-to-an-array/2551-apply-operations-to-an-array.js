/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    let ans = [];
    for(let i = 0 ; i < nums.length; i++) {
        if(i !== nums.length -1 && nums[i] === nums[i+1]) {
            nums[i] = 2 * nums[i];
            nums[i+1] = 0;
        }
        if(nums[i] !== 0) ans.push(nums[i]);
    }

    for(let i = ans.length; i < nums.length; i++) {
        ans.push(0);
    }
    return ans;
    
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    if(nums.length === 1)return true;

    for(let i = 0; i < nums.length - 1; i++) {
        // let flag = 0;

        // for(let j = i + 1; j < nums.length; j++) {
            // if(nums[i] === nums[j]) return false;

            if(nums[i] % 2 === nums[i+1] % 2) return false;
        // }
        // if(flag) return false;
    }
    return true;
};
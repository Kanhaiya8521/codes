/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxCount = -Infinity;
    let currentCount = 0;
    for(let i = 0 ; i < nums.length; i++) {
        currentCount += nums[i];

        if(currentCount > maxCount) maxCount = currentCount;

        if(currentCount < 0) currentCount = 0;        
    }
    return maxCount;
};
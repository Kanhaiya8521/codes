/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let maxLength = 0;
    for(let i = 0 ; i < nums.length; i++) {
        let increaseLen = 1;
        let decreaseLen = 1;
        for(let j = i ; j < nums.length-1; j++) {
            if(nums[j+1] > nums[j] && decreaseLen === 1) {
                increaseLen++;
            }
            else if(nums[j+1] < nums[j] && increaseLen === 1) {
                decreaseLen++;
            } else break;
        }
        maxLength = Math.max(maxLength, increaseLen, decreaseLen);
    }
    return maxLength;
};
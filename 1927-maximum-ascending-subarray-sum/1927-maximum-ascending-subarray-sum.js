/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
     let maxSum = 0;
     let currSum = 0;
    for(let i = 0 ; i < nums.length; i++) {
        let increaseLen = 1;
        let decreaseLen = 1;
         currSum = nums[i]
        for(let j = i ; j < nums.length-1; j++) {
            if(nums[j+1] > nums[j] && decreaseLen === 1) {
                increaseLen++;
                currSum += nums[j+1]
            }
            // else if(nums[j+1] < nums[j] && increaseLen === 1) {
            //     decreaseLen++;
            //     currSum += nums[j+1];
            // }
             else break;
        }
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
};
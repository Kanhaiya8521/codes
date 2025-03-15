/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let currentSum = 0 , maxSum = -Infinity;

    for(let num of nums) {
        currentSum += num;

        if(currentSum > maxSum) maxSum = currentSum;

        if(currentSum < 0) currentSum = 0;
    }
    return maxSum;
    
};
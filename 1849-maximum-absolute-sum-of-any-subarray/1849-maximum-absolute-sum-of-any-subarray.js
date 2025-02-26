/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let minSum = 0, maxSum = 0;
    let currentSum = 0;

    for(let num of nums) {
        currentSum += num;

        if(currentSum > maxSum) {
            maxSum = currentSum;
        }
        if(currentSum < minSum) minSum = currentSum;
    }

    return Math.abs(maxSum - minSum);
    
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let currentLength = 1;
    let maxLength = 1;

    for(let i = 0 ; i < nums.length; i++) {
        currentLength = 1;
        let usedBit = nums[i];
        
        for(let j = i + 1; j < nums.length; j++) {  
            if(isNice(usedBit, nums[j])) {
                usedBit |= nums[j];  
                currentLength++;
            } else {
                break;
            }
        }

        maxLength = Math.max(maxLength, currentLength); 
    }

    return maxLength;
};

function isNice(i, j) {
    return (i & j) === 0;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    let badPairs = 0 ;
    let diffCount = new Map();

    for(let i = 0 ; i < nums.length; i++) {
        let diff = i - nums[i];
        let goodPairsCount = diffCount.get(diff) || 0;
        badPairs += i - goodPairsCount;
        diffCount.set(diff, goodPairsCount + 1);

        
    }
    return badPairs;
    
};
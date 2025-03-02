/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let i = 0, j = 0;
    let ans = [];

    while(i < nums1.length && j < nums2.length){
        const [id1, val1] = nums1[i];
        const [id2, val2] = nums2[j];

        if(id1 > id2) {
            ans.push([id2, val2]);
            j++;
        } else if(id1 < id2) {
            ans.push([id1, val1]);
            i++;
        } else {
            ans.push([id1, val1 + val2]);
            i++;
            j++;
        }
    }

    while(i < nums1.length) {
        const [id1, val1] = nums1[i];
        ans.push([id1, val1]);
        i++;
    }
    while(j < nums2.length) {
        const [id1, val1] = nums2[j];
        ans.push([id1, val1]);
        j++;
    }

    return ans;
    
};
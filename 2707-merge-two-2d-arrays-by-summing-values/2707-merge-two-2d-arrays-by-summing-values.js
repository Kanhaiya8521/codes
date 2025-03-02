/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let map = new Map();
    for(let num of nums1) {
        map.set(num[0], num[1]);
    }
    console.log(map)

    for(let num of nums2) {
        if(map.get(num[0])) {
          map.set(num[0], map.get(num[0])+num[1]);

        } else
        map.set(num[0], num[1]);
    }
    const sortedByKey = new Map([...map.entries()].sort((a, b) => a[0] - b[0]));
    let ans = [];
    for (const [key, value] of sortedByKey) {
        ans.push([key, value])
  console.log(`Key: ${key}, Value: ${value}`);
}
    return ans
    
};
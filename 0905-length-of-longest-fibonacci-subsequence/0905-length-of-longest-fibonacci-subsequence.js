/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    let n = arr.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(0));
    let maxLen = 0;

    for (let curr = 2; curr < n; curr++) {
        let start = 0, end = curr - 1;
        while (start < end) {
            let pairSum = arr[start] + arr[end];
            if (pairSum > arr[curr]) {
                end--;
            } else if (pairSum < arr[curr]) {
                start++;
            } else {
                dp[end][curr] = dp[start][end] + 1;
                maxLen = Math.max(dp[end][curr], maxLen);
                end--;
                start++;
            }
        }
    }
    return maxLen === 0 ? 0 : maxLen + 2;
};
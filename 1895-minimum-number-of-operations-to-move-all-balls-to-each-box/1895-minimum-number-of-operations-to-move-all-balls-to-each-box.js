/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let left = 0, right = 0;
    let totalLeft = 0, totalRight = 0;
    let res = [];
    for (let i=0; i<boxes.length; i++) {
        if(boxes[i] == '1') {
            totalRight += i;
            right ++;
        }
    }

    for (let i=0; i<boxes.length; i++) {
        res.push(totalRight + totalLeft);
        if(boxes[i] == '1') {
            right--;
            left++;
        }
        totalLeft += left;
        totalRight-=right;
    }
    return res;
};
    

var ProductOfNumbers = function() {
    this.list = [];
    
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.list.push(num);
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    let ans = 1;

    for(let i = this.list.length - 1; i >= this.list.length - k; i--) {
        ans = ans * this.list[i];
    }
    return ans;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
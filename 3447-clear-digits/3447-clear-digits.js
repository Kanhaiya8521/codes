/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = [];

    for(let i = 0 ; i < s.length; i++) {
        if(/\d/.test(s[i])) {
            if(stack.length) stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join("");
};
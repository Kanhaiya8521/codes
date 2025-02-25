/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack = [];
    let k = -1;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
            k++;
        } else if(s[i] === ')') {
            if(stack[k] === '('){
                k--;
                stack.pop();
            } else return false;
        } else if(s[i] === '}') {
            if(stack[k] === '{'){
                k--;
                stack.pop();
            } else return false;
        }
         else if(s[i] === ']') {
            if(stack[k] === '['){
                k--;
                stack.pop();
            } else return false;
        }
    }
    if(stack.length) return false;
    return true;
    
};
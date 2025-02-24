/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
    let s = traversal, idx = 0, level = 0;
    
    let node = new TreeNode(-1);
    helper(node, 0);
    return node.left;

    function helper(parent, lvl) {
        while (idx < s.length && lvl === level) {
            let num = 0;
            while (idx < s.length && /\d/.test(s[idx])) {
                num = num * 10 + (s[idx++] - '0');
            }
            let node = new TreeNode(num);
            if (!parent.left)
                parent.left = node;
            else
                parent.right = node;
            level = 0;
            while (idx < s.length && s[idx] === '-') {
                level++;
                idx++;
            }
            helper(node, lvl + 1);
        }
    }
};
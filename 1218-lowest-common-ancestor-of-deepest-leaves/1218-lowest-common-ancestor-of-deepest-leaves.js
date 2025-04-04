/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    const helper = (node) => {
        if (!node) return [0, null];

        let [ldepth, llca] = helper(node.left);
        let [rdepth, rlca] = helper(node.right);

        if (ldepth === rdepth) {
            return [ldepth + 1, node];
        } else if (ldepth > rdepth) {
            return [ldepth + 1, llca];
        } else {
            return [rdepth + 1, rlca];
        }
    };

    return helper(root)[1];
};
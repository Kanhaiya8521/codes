/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    let index = 0;
    
    function construct(l, h) {
        if (index >= pre.length || l > h) return null;

        let root = new TreeNode(pre[index++]);
        if (l === h) return root;

        let i = l;
        while (i <= h && post[i] !== pre[index]) i++;

        if (i <= h) {
            root.left = construct(l, i);
            root.right = construct(i + 1, h - 1);
        }

        return root;
    }

    return construct(0, pre.length - 1);
};
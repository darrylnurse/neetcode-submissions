/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root == null) return [];
        const result = [];

        let level = 1; 
        const queue = [[root, level]];
        while (queue.length > 0) {
            const [node, level] = queue.shift();
            if (result[level - 1]) {
                result[level - 1].push(node?.val)
            } else {
                result.push([node?.val]);
            }
            if (node.left !== null) queue.push([node.left, level + 1]);
            if (node.right !== null) queue.push([node.right, level + 1]);
        }

        return result;
    }
}

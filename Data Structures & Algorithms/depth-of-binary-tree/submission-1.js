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
     * @return {number}
     */
    maxDepth(root) {
        // max counter
        // dfs, increment counter until we reach no more nodes
        // math max max counter

        if (root == null) return 0;
        const stack = [[root, 1]];
        let maxDepth = 0;
        
        while (stack.length > 0) {
            const [node, depth] = stack.pop();

            if (node != null) {
                maxDepth = Math.max(maxDepth, depth);
                if (node.left != null) stack.push([node.left, depth + 1]);
                if (node.right != null) stack.push([node.right, depth + 1]);
            }
        }

        return maxDepth;
    }
}

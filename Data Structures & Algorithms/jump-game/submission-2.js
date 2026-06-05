class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let maxReach = 0;
        for (const [index, num] of nums.entries()) {
            if (index > maxReach) return false;
            maxReach = Math.max(maxReach, index + num);
        }
        return true;
    }
}

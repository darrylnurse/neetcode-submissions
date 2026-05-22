class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seenMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const needed = target - num;
            if (seenMap.has(needed)) {
                return [i, seenMap.get(needed)];
            }
            seenMap.set(num, i);
        }
        return [-1, -1];
    }
}

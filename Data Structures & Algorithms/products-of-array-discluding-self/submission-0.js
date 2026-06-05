class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;

        const prefix = new Array(len).fill(1);
        const suffix = new Array(len).fill(1);
        const result = new Array(len).fill(1);

        for (let i = 1; i < len; i++) {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }
        for (let i = len - 2; i >= 0; i--) {
            suffix[i] = nums[i + 1] * suffix[i + 1];
        }
        for (let i = 0; i < len; i++) {
            result[i] = prefix[i] * suffix[i];
        }

        return result;
    }
}

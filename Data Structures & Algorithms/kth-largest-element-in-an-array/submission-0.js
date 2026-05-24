class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const sortedNums = nums.sort((a, b) => b - a);
        return sortedNums[k - 1];
    }
}

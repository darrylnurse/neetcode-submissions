class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        const bucket = Array.from(
            { length: nums.length + 1 },
            () => []
        );

        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (const numKey in count) {
            bucket[count[numKey]].push(parseInt(numKey));
        }

        const result = [];
        for (let i = bucket.length - 1; i > 0; i--) {
            result.push(...bucket[i]);
            if (result.length === k) {
                return result;
            }
        }
    
    }
}

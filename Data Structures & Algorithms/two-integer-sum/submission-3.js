class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const mappy = new Map();

        for(let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            if(mappy.has(complement)) {
                return [mappy.get(complement), i];
            } else {
                mappy.set(nums[i], i);
            }
        }
        return [-1, -1];
    }
}

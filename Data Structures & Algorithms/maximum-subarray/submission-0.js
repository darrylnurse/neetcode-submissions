class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let highestSum = -Infinity;
        for (let i = 0; i < nums.length; i++) {
            let currSum = 0;   
            for (let j = i; j < nums.length; j++) {
                currSum += nums[j];
                highestSum = Math.max(highestSum, currSum);
            }
        }
        return highestSum
    }
}

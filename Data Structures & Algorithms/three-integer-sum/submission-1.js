class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < sortedNums.length; i++) {
            const curr = nums[i];

            if (curr > 0) {
                break;
            }
            if (i > 0 && curr === nums[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = sortedNums.length - 1;

            while (left < right) {
                const sum = curr + nums[left] + nums[right];
                if (sum > 0) {
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    result.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                }
            }
        }
        return result;
    }
}

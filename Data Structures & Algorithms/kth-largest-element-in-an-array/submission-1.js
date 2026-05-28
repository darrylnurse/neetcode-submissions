class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
      const target = nums.length - k;

      const quickSelect = (left, right) => {
        const pivot = nums[right];
        let partition = left;

        for (let i = left; i < right; i++) {
            if (nums[i] <= pivot) {
                [nums[partition], nums[i]] = [nums[i], nums[partition]];
                partition++;
            }
        }

        [nums[partition], nums[right]] = [nums[right], nums[partition]];

        if (partition > target) {
            return quickSelect(left, partition - 1);
        } else if (partition < target) {
            return quickSelect(partition + 1, right);
        } else {
            return nums[partition];
        }
      }

      return quickSelect(0, nums.length - 1);
    }
}

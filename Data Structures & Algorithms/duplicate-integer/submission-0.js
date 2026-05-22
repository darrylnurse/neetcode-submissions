class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mappy = new Map();
        for(const num of nums){
            if(!mappy.has(num)){
                mappy.set(num, 1);
            } else {
                return true;
            }
        }
        return false;
    }
}

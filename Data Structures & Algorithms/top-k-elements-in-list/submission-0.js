class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result = [];
        const mappy = new Map();
        for(const num of nums){
            mappy.set(num, 1 + (mappy.get(num) || 1));
        }
        
        const findHighest = (map) => {
            let highestKey = 0; 
            map.forEach((value, key) => {
                if(value > (map.get(highestKey) || 0)){
                    highestKey = key;
                }
                console.log(highestKey);
            })
            return highestKey;
        }
        
        for(let i = 0; i < k; i++){
            result.push(findHighest(mappy));
            mappy.delete(findHighest(mappy));
        }

        return result;

    }
}

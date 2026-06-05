class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = new Map();

        for (const num of nums) {
            const currentFrequency = frequencyMap.get(num) || 0;
            frequencyMap.set(num, currentFrequency + 1);
        }

        let i = 0;
        let highestArray = [];

        while(i < k) {
            let highest = frequencyMap.keys().next().value;
            console.log(frequencyMap)
            for (const [key, value] of frequencyMap) {
                const highestValue = frequencyMap.get(highest);
                console.log(highestValue);
                if (value > highestValue) {
                    highest = key;
                }
            }
            highestArray.push(highest)
            frequencyMap.delete(highest);
            i++;
        }

        return highestArray;
    }
}

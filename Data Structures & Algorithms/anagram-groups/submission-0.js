class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // create map of sorted srs
        // value is array of anagrams

        if(strs.length === 0) return [[]];

        const map = new Map();

        for(const str of strs){
            const symbol = str.split('').sort().join('');
            if(!map.has(symbol)){
                map.set(symbol, [str]);
            } else {
                map.get(symbol).push(str);
            }
        }

        return Array.from(map.values());
    }
}

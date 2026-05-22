class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(const str of strs) {
            const atoz = new Array(26).fill(0);

            for (const c of str) {
                atoz[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const alphaHash = atoz.join("#");

            if(!map.has(alphaHash)) {
                map.set(alphaHash, []);
            }

            map.get(alphaHash).push(str);
        }

        return Array.from(map.values());
    }
}

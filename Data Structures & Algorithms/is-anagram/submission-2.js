class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length === 0 && t.length === 0) return true;
        if (s.length !== t.length) return false;

        const sMap = new Map();
        const tMap = new Map();
        for (let i = 0; i < s.length; i++) {
            const sStr = s[i];
            const sFreq = sMap.get(sStr) || 0;
            sMap.set(sStr, sFreq + 1);

            const tStr = t[i];
            const tFreq = tMap.get(tStr) || 0;
            tMap.set(tStr, tFreq + 1);
        }

        for (const [key, value] of sMap) {
            if (
                !tMap.get(key) ||
                tMap.get(key) !== value
            ) return false;
        }
        return true;l

    }
}

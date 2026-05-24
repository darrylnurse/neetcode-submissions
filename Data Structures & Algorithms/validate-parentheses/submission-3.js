class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;
        const bracketMap = {
            "[":"]",
            "(":")",
            "{":"}",
        };
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (s[right] === bracketMap[s[left]]) {
                left++;
                right--;
            } else if (s[left + 1] === bracketMap[s[left]]) {
                left += 2;
            } else {
                return false;
            }
        }

        return true;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const string = s.replaceAll(/\W/g, "").toLowerCase();
        let left = 0;
        let right = string.length - 1;
        while (left < right) {
            console.log(string[left], string[right])
            if (string[left] === string[right]) {
                left++;
                right--;
            } else {
                return false;
            }
        }
        return true;
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for(const str of strs) {
            const length = str.length;
            result += `${length}#${str}`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];

        let i = 0;
        while(i < str.length) {
            let j = i;
            
            while (str[j] !== "#") {
                j++;
            }

            let length = parseInt(str.substring(i, j));

            i = j + 1;
            j = i + length;

            const string = str.substring(i, j);
            result.push(string);
            i = j;
        }

        return result;
    }
}

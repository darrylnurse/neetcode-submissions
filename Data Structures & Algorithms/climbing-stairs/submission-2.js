class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) return n;

        let beforePrev = 1;
        let prev = 2;

        for( let i = 3; i <= n; i++) {
            const current = beforePrev + prev;

            beforePrev = prev;
            prev = current;
        }

        return prev;
    }
}

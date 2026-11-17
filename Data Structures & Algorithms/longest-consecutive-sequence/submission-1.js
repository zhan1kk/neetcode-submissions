class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) {
            return 0;
        }
        const sorted = nums.sort((a, b) => a - b);
        let i = 0;
        let longest = 1;
        let seq = 1;
                
        while (i < sorted.length - 1) {
            if (sorted[i] + 1 === sorted[i + 1]) {
                seq++;
                i++;
            } else if (sorted[i] === sorted[i + 1]) {
                i++;
            } else {
                longest = Math.max(longest, seq);
                seq = 1;
                i++;
            }
        }
        longest = Math.max(longest, seq);
        return longest;
    }
}

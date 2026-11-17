class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0;
        let r = heights.length - 1;
        let max_amount = 0;

        while (l < r) {
            const height1 = heights[l];
            const height2 = heights[r];
            const amount = (r - l) * Math.min(height1, height2);
            max_amount = Math.max(max_amount, amount);

            if (height1 < height2) {
                l++;
            } else {
                r--;
            }
        }

        return max_amount;
    }
}

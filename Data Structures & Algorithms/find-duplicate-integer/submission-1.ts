class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        for (let i = 0; i < nums.length; i++) {
            const idx = Math.abs(nums[i]) - 1;
            if (nums[idx] < 0) return idx + 1;
            nums[idx] *= -1;
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const j = nums.length - 1;
        const left_arr = new Array(j + 1).fill(1);
        const right_arr = new Array(j + 1).fill(1);
        for (let i = 1; i < nums.length; i++) {
            left_arr[i] = left_arr[i-1] * nums[i-1];
            right_arr[j - i] = right_arr[j - i + 1] * nums[j - i + 1];
        }

        const result = new Array();
        for (let i = 0; i < nums.length; i++) {
            result[i] = left_arr[i] * right_arr[i];
        }

        return result;
    }
}

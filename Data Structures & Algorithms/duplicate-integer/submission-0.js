class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Map();
        
        for (let i = 0; i < nums.length; i++) {
            if (set.has(nums[i])) {
                return true;
            }
            set.set(nums[i]);
        }
        return false;
    }
}

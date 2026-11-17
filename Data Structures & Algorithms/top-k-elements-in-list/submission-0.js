class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};

        for (let num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }

        const buckets = [];
        
        for (let num in freq) {
            const f = freq[num];

            if (!buckets[f]) {
                buckets[f] = [];
            }

            buckets[f].push(Number(num));
        }

        const res = [];

        for (let f = buckets.length; f >= 0 && res.length < k; f--) {
            if (buckets[f]) {
                res.push(...buckets[f]);
            }
        }

        return res.slice(0, k);
    }
}

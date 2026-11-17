class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort(function(a, b){return a - b});
        const triplets = [];

        for (let i = 0; i < sorted.length - 2; i++) {
            if (i !== 0 && sorted[i] === sorted[i - 1]) {
                continue;
            }

            const num1 = sorted[i];
            let l = i + 1;
            let r = sorted.length - 1;

            while (l < r) {
                const num2 = sorted[l];
                const num3 = sorted[r];

                if (-num1 === num2 + num3) {
                    triplets.push([num1, num2, num3]);
                    l++;
                    r--;

                    while (l < r && sorted[l] === sorted[l-1]) {
                        l++;
                    }

                    while (l < r && sorted[r] === sorted[r+1]) {
                        r--;
                    }
                }
                else if (-num1 > num2 + num3) {
                    l++;
                }
                else if (-num1 < num2 + num3) {
                    r--;
                }
            }

        }

        return triplets;
    }
}

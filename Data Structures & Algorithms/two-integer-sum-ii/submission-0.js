class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;

        while (l < r) {
            const number1 = numbers[l];
            const number2 = numbers[r];
            if (number1 + number2 > target) {
                r--;
            }
            else if (number1 + number2 < target) {
                l++;
            }
            else if (number1 + number2 === target) {
                return [l + 1, r + 1];
            }
        }
    }
}

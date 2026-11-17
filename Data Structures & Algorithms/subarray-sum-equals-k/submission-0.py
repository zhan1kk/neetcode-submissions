class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        freq = {0: 1}
        output = 0
        summ = 0
        
        for i in range(len(nums)):
            summ += nums[i]
            diff = summ - k
            if diff in freq:
                output += freq[diff]
            freq[summ] = freq.get(summ, 0) + 1

        return output

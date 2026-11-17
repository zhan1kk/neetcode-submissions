class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const count1 = {};
        const count2 = {};

        for (let i = 0; i < s.length; i++) {
            count1[s[i]] = (count1[s[i]] || 0) + 1;
            count2[t[i]] = (count2[t[i]] || 0) + 1;
        }

        for (const key in count1) {
            if (count1[key] !== count2[key]) {
                return false;
            }
        }
        return true;
    }
}

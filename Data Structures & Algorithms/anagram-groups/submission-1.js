class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};

        for (let s of strs) {
            const map = new Array(26).fill(0);
            for (let c of s) {
                map[c.charCodeAt()-'a'.charCodeAt()]++;
            }
        const key = map.toString();

        if (!res[key]) {
            res[key] = [];
        }
        res[key].push(s);
        }

        return Object.values(res);
    }
}

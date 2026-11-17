class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const alphanum = [];
        for (let l of s) {
            const dec = Number(l.toLowerCase().charCodeAt(0));
            if ((dec >= 48 && dec <= 57) || (dec >= 97 && dec <= 122)) {
                alphanum.push(l.toLowerCase());
            }
        }

        let l = 0;
        let r = alphanum.length - 1;

        while (l < r) {
            if (alphanum[l] !== alphanum[r]) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}

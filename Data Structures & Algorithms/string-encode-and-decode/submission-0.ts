class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const result = strs.map(str => `${str.length}#${str}`).join("");
        console.log(result);
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const strs = [];
        let i = 0;

        while (i < str.length) {
            const j = str.indexOf("#", i);
            const len = Number(str.slice(i, j));
            const word = str.slice(j + 1, len + j + 1);
            strs.push(word);
            i = len + j + 1;
        }

        return strs;
    }
}

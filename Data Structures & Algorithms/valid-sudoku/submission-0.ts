class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const sets = new Array(27).fill(null).map(() => new Set());
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const subbox_index = Math.floor(j / 3) + Math.floor(i / 3) * 3;
                const digit = board[i][j];
                if (
                    sets[i].has(digit) || 
                    sets[9 + j].has(digit) || 
                    sets[18 + subbox_index].has(digit)
                ) {
                    return false;
                }
                if (digit !== ".") {
                    sets[i].add(digit);
                    sets[9 + j].add(digit);
                    sets[18 + subbox_index].add(digit);
                }
            }
        }

        return true;
    }
}

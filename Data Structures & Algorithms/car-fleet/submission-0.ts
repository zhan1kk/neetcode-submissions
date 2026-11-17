class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const pos_speed = [];
        for (let i = 0; i < position.length; i++) {
            pos_speed.push([position[i], speed[i]]);
        }

        const sorted = pos_speed.sort((a, b) => b[0] - a[0]);
        const hours = [];

        for (let lst of sorted) {
            hours.push((target - lst[0]) / lst[1]);
        }

        let fleets = 0;
        let max = 0;

        for (let h of hours) {
            if (h > max) {
                fleets++;
                max = h;
            }
        }
        return fleets;
    }
}

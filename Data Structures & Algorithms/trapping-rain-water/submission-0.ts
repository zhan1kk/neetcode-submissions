class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let l = 0;
        let r = height.length - 1;
        let res = 0;
        let water_level = 0;
        
        while (l < r - 1) {
            const h1 = height[l];
            const h2 = height[r];
            let cur_height = Math.min(h1, h2);
            
            if (cur_height > water_level) {
                res = res + (cur_height - water_level) * (r - l - 1);
            }
            
            water_level = Math.max(cur_height, water_level);

            if (h1 > h2) {
                r--;
                res = Math.max(0, res - Math.min(water_level, height[r]));
            } else {
                l++;
                res = Math.max(0, res - Math.min(water_level, height[l]));
            }

            console.log(`l=${l}, r=${r}, res=${res} || cur_h=${cur_height}, highest=${water_level}`) 
        } 

        return res;
    }
}

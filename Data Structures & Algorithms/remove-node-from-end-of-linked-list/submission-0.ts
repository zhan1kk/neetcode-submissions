/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let l: number = 0;
        let cur: ListNode | null = head;

        while (cur) {
            cur = cur.next;
            l++;
        }

        let idx: number = l - n;

        const dummy = new ListNode(0, head);
        cur = dummy;

        for (let i = 0; i < idx; i++) {
            cur = cur.next;
        }
        cur.next = cur.next.next
        return dummy.next;
    }
}

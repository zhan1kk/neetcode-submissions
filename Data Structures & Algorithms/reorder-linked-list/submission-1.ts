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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if (!head || !head.next) return;
        
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next!;
            fast = fast.next.next;
        }

        let second = slow.next;
        slow.next = null;

        let prev: ListNode | null = null;
        let cur = second;

        while (cur) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        let first: ListNode | null = head;
        second = prev

        while (second) {
            const tmp1 = first!.next;
            const tmp2 = second.next;

            first!.next = second;
            second.next = tmp1;

            first = tmp1;
            second = tmp2;
        }
    }
}

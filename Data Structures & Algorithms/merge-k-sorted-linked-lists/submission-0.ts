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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode | null{
        if (lists.length === 0) return null;

        for (let i = 1; i < lists.length; i++) {
            lists[i] = this.mergeTwoLists(lists[i-1], lists[i]);
        }
        return lists[lists.length - 1];
    }

    mergeTwoLists(list1: ListNode, list2: ListNode): ListNode {
        let l1 = list1;
        let l2 = list2;
        const dummy = new ListNode();
        let cur = dummy;

        while (l1 && l2) {
            if (l1.val > l2.val) {
                cur.next = l2;
                l2 = l2.next;
            } else {
                cur.next = l1;
                l1 = l1.next;
            }
            cur = cur.next;
        }

        if (l1) cur.next = l1;
        else cur.next = l2;

        return dummy.next;
    }
}

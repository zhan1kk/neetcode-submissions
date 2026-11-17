// class ListNode {
//     val: number;
//     next: ListNode | null;

//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
 

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let dummy = new ListNode();
        let cur = dummy;
        let l1 = list1;
        let l2 = list2;

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

// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node | null {
        if (!head) return null;
        const dummy = new Node(0);
        const hash = new Map<Node, Node>();
        let orig = head;
        let copy = dummy;

        while (orig) {
            copy.next = new Node(orig.val);
            copy = copy.next;
            hash.set(orig, copy);
            orig = orig.next;
        }

        orig = head;
        copy = dummy.next!;
        while (orig) {
            const rand = orig.random;
            if (rand) copy.random = hash.get(rand)!;
            orig = orig.next;
            copy = copy.next!;
        }

        return dummy.next;
    }
}

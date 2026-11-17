class ListNode {
    key: number;
    val: number;
    next: ListNode | null;
    prev: ListNode | null;

    constructor(key: number, val: number, next: ListNode | null = null, prev: ListNode | null = null) {
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class LRUCache {
    capacity: number;
    cache: Map<number, ListNode>;
    head: ListNode;
    tail: ListNode | null;
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new ListNode(-1, 0);
        this.tail = new ListNode(-2, 0, null, this.head);
        this.head.next = this.tail;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        const cur = this.cache.get(key);
        if (cur && cur !== this.tail.prev) {
            let prev = cur.prev;
            const next = cur.next;
            prev.next = next;
            next.prev = prev;

            prev = this.tail.prev;
            cur.prev = prev;
            cur.next = this.tail;
            prev.next = cur;
            this.tail.prev = cur;
        } 
        return cur ? cur.val: -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        const node = new ListNode(key, value);
        if (this.cache.has(key)) {
            const cur = this.cache.get(key);
            const prev = cur.prev;
            prev.next = cur.next;
            prev.next.prev = prev;
        } else if (this.capacity === this.cache.size) {
            const key = this.head.next.key;
            const nxt = this.head.next.next;
            this.head.next = nxt;
            nxt.prev = this.head;
            this.cache.delete(key);
        }

        const prev = this.tail.prev;
        node.prev = prev;
        node.next = this.tail;
        prev.next = node;
        this.tail.prev = node;

        this.cache.set(key, node);
    }
}

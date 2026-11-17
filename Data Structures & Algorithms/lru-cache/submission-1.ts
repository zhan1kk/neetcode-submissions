class ListNode {
    key: number;
    val: number;
    next: ListNode | null;
    prev: ListNode | null;

    constructor(key: number, val: number) {
        this.key = key;
        this.val = val;
    }
}

class LRUCache {
    capacity: number;
    cache: Map<number, ListNode>;
    head: ListNode;
    tail: ListNode;
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new ListNode(-1, -1);
        this.tail = new ListNode(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        const node = this.cache.get(key);
        if (!node) return -1 

        this.remove(node);
        this.insertToTail(node);

        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        const existing = this.cache.get(key);

        if (existing) this.remove(existing);

        const node = new ListNode(key, value);
        this.cache.set(key, node);
        this.insertToTail(node);

        if (this.cache.size > this.capacity) {
            const lru = this.head.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }

    private remove(node: ListNode): void {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    private insertToTail(node: ListNode): void {
        const prev = this.tail.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.tail;
        this.tail.prev = node;
    }
}

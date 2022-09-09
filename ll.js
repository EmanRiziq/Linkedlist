'use strict';

const Node = require('./node');
class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(val) {
        const node = new Node(val);
        if (!this.head) { // Means ll is empty
            this.head = node;
        } else { // LL not empty
            node.next = this.head;
            this.head = node
        }
    }
}

module.exports = LinkedList;
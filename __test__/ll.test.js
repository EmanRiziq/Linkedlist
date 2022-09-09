'use strict';

const LinkedList = require('../ll');

describe('Testing linked list', () => {
    it('Test creating a linked list', () => {
        const ll = new LinkedList();
        expect(ll).toBeDefined();
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head).toBeNull();
    })
})

describe('Insert to the beginning of the linked list', () => {
    it('Add to an empty LL', () => {
        const ll = new LinkedList();
        ll.insert('a');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
    });

    it('Add to a non-empty LL', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        // ll.insert('c');
        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toEqual('a');
        expect(ll.head.next.next).toBeNull();
    })
})


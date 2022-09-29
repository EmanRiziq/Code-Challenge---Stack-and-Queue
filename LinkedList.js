'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null;
        this.length = 0;
    }

    insert(val) {
        const node = new Node(val);
        if (!this.head) { // Means ll is empty
            this.head = node;
        } else { // LL not empty
            node.next = this.head;
            this.head = node
        }
        if (this.length == 0)
            this.tail = node;
        this.length += 1;

    }

    append(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.tail = node;
        this.length += 1;
    }
    printlist() {
        let str = "";
        if (this.length > 0) {
            let currentNode = this.head;

            for (let i = 0; i < this.length; i++) {
                str += `${currentNode.value} -> `
                currentNode = currentNode.next;
            }
            console.log(str)
        }
        else {
            console.log("the list is empty")
        }
    }


    deletemiddle() {
        let loc;
        if (this.length != 0) {
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
                this.length = 0
            } else
                if (this.length === 2) {
                    this.head = this.head.next;
                    this.length = 1;
                }
                else {
                    loc = Math.ceil(this.length / 2);
                    let currentNode = this.head;
                    for (let i = 1; i < loc - 1; i++) {
                        currentNode = currentNode.next;
                    }
                    let temp = currentNode.next.next;
                    currentNode.next = temp;
                    this.length -= 1;
                }

        }
    }

    insertat(loc, val) {
        if (loc > this.length) {
            this.append(val)
        }
        else {
            if (this.length == 1 || loc == 0) {
                this.insert(val)
            }
            else {
                const node = new Node(val);
                let currentNode = this.head;
                for (let i = 1; i < loc - 1; i++) {
                    currentNode = currentNode.next;
                }
                node.next = currentNode.next;
                currentNode.next = node;
                this.length += 1;
            }
        }
    }

    deletelast() {
        let currentNode = this.head;
        if (currentNode.next == null) {
            this.head = null;
            this.tail = null;
            this.length -= 1;
            return;
        }
        while (currentNode.next.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail=currentNode;
        this.length -= 1;
        return;
    }

    deletefirst() {
        if (this.length == 0) {
            return null;
        } else if (this.slength == 1) {
            let result = this.head;
            this.head = null;
            this.tail = null;
            this.length -= 1;

            return result;
        } else {
            let result = this.head;
            this.head = this.head.next;
            this.length -= 1;

            return result;
        }
    }
}

module.exports = LinkedList;
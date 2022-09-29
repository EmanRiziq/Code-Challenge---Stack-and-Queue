'use strict';

const linkedList = require( "./LinkedList" );

class Queue {
    constructor () {
        this.front = null;
        this.storage = new linkedList;
    }

    enqueue ( value ) {
        this.storage.append( value );
        if ( this.storage.length == 1 ) {
            this.front = value;
        } else {
            this.front = this.storage.head.value;
        }
    }

    dequeue () {
        let deletedNode = this.storage.deletefirst();
        return deletedNode.value;
    }

    peek () {
        return this.storage.head;
    }

    isEmpty () {
        if ( this.front == null ) return true;
        else return false;
    }
}

module.exports = Queue;

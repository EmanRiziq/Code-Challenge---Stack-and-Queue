'use strict';

const linkedList = require ('./LinkedList')

class Stack {
    constructor(){
        this.storage = new linkedList()
        this.top = null
    }

    pushItem(value){
        this.storage.append(value);
        this.top = value;
    }

    popItem(){
        if (this.storage.length !== 0){
            this.storage.deletelast();
            this.top = this.storage.tail;
            return this.top
        } else {
            return null
        }
    }

    peek(){
        return this.top
    }

    isEmpty(){
        if (this.top == null) return true 
        else return false
    }
}

module.exports = Stack

'use strict'

const Stack =require('./stack');
const Queue=require('./queue')

const newStack = new Stack;

console.log(newStack)
console.log(newStack.isEmpty())
newStack.pushItem('A')
newStack.pushItem('B')
newStack.pushItem('C')
newStack.pushItem('D')
newStack.storage.printlist()
console.log(newStack.peek())
console.log(newStack.isEmpty())

////////////////////////////////////////////////////////////////////////////
const newQueue = new Queue

console.log(newQueue)
newQueue.enqueue('A')
newQueue.enqueue('B')
newQueue.enqueue('C')
newQueue.enqueue('D')
newQueue.storage.printlist()
newQueue.dequeue();
newQueue.storage.printlist()
console.log(newQueue.peek())
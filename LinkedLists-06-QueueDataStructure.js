// Queue Data Structure
// Linked List for QDS
// Time Complexity Constant Time

class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null; // pointer
  }
}

class Queue {
  constructor() {
    this.front = null;  // define front and back
    this.back = null;
    this.size = 0;  // start at empty queue
  }
  // method to add new node to back of queue
  enqueue(val) {
    const newNode = new QueueNode(val);
    if (this.size === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode; 
      this.back = newNode;
    }
    
    this.size++;
  }
  // method to remove node from front of the queue -rtrn value dequeued
  dequeue() {
    if (this.size === 0) {
      return null;
    }
    
    const removedNode = this.front;
    if (this.size === 1) {
      this.back = null
    }
    
    this.front = this.front.next;
    this.size--;
    return removedNode.val;
  }
}

const testQueue = new Queue()

testQueue.enqueue('a');
testQueue.enqueue('b');
testQueue.enqueue('c');
console.log(testQueue)

console.log('after dequeue', testQueue.dequeue() )
console.log('after dequeue', testQueue.dequeue() )
console.log('after dequeue', testQueue.dequeue() )
console.log('after dequeue', testQueue.dequeue() )


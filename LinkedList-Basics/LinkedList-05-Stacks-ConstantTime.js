// Using an Linked List with STACKS
// Time Complexity: O(1) Constant
// Space Complexity O(n)
class StackNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
//   PUSH METHOD
  push(val) {
   
    if (this.size === 0) {
      this.top = new StackNode(val);
    } else {
      const pushedNode = new StackNode(val);
      pushedNode.next = this.top;
      this.top = pushedNode;
    }
    
    this.size++;
  }

//   POP METHOD 
  pop() {
    if (this.size === 0) return null;
    
    const poppedNode = this.top;
    this.top = this.top.next;
    this.size--;

    return poppedNode.val;
  }

  // Abstract data structure
  getTop() {
    return this.top.val;
  }
}

const myStack = new Stack();
console.log('Test push method')
myStack.push('a'); // bottom of stack
myStack.push('b'); // middle of stack
myStack.push('c'); // top of stack

console.log(`My Stack Size: ${myStack.size}`)
console.log(`My Stack Top: ${myStack.getTop()}`)

console.log('Test pop method')
console.log(myStack.pop(), ' is the Top Node Value Popped')
console.log(`My Stack Size: ${myStack.size}`)
console.log(`New Top after pop: ${myStack.getTop()}`)
console.log('pop off stack until empty stack0')
console.log(myStack.pop(), ' is the Top Node Value Popped')
console.log(myStack.pop(), ' is the Top Node Value Popped')
console.log(myStack.pop(), `My Stack Size: ${myStack.size}`)
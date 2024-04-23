// Recursive LinkedList with Sum List Iterative and Recursive Examples below:
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  append(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    } 
    this._append(val, this.head);
  }

  _append(val, curr) {
    if (curr.next === null) {      
      curr.next = new Node(val); 
      return;
    }
    this._append(val, curr.next);
  }

  print() {
    const output = this._print(this.head);
    console.log(output)
  }

  _print(curr) {
    if (curr === null) return '';
    return `${curr.val} --> ${this._print(curr.next)}`
  }

  contains(target) {
    return this._contains(target, this.head)
  }
  _contains(target, curr) {
    if (curr === null) return false;
    if (curr.val === target) return true;
    return this._contains(target, curr.next)
  }
}

const list = new LinkedList()
list.append(11)
list.append(7)
list.append(10)
list.append(2)

// Iterative Sum List
// Time Complexity: O(n) && Space Complexity: Constant time O(1)
const sumList = head => {
  let sum = 0;
  let curr = head;
  // iteration 
  while(curr !== null) {
    sum += curr.val;
    curr = curr.next;
  }
  
  return sum;
}

console.log('Iterative Sum List', sumList(list.head))  // 30

// Recursive Sum List
// Time Complexity: O(n)
// Space Complexity: requires stackframes = n before bottom out
// O(n)
const sumListRecursive = head => (head === null) ? 0 : head.val + sumListRecursive(head.next);

console.log('Recursive Sum List', sumListRecursive(list.head))  // 30

// In the sum problem, more logical choice is Iterative Approach if you are concerned about Space Complexity. Both approaches have same Time Complexity.
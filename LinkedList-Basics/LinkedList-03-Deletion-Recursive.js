// Deletions with Linked List
// RECURSIVE SOLUTION
// Time Complexity: O(n)
// Space Complexity: O(n) n stack frames
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

const deleteValue = (head, target) => {
  if (head.val === target) {
    return head.next
  }

  _deleteValue(head, null, target);
  return head;
}

const _deleteValue = (curr, prev, target) => {
  if (curr === null) {
    return; 
  }
  
  if (curr.val === target) {
   
    prev.next = curr.next;
    return; 
  }
// helper fn -recursion
  _deleteValue(curr.next, curr, target);
}

const print = head => {
  if (head === null) return; 
  console.log(head.val);
  print(head.next);
}

print(a) // a b c d

const newHead = deleteValue(a, 'a'); 

print(newHead)  



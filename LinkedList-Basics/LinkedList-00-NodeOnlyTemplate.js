class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Create Node Instances
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

// Link Node Instances
a.next = b;
b.next = c;
c.next = d;

// Print Node List 
const print = head => {
  if (head === null) return;
  console.log(head.val);
  print(head.next);
}

print(a); // a b c d

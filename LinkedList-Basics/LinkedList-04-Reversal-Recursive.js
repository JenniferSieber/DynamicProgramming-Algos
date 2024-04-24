// Recursive Approach first:
// write fn accepts head of linked list as arg
// fn reverse the order of the nodes of the linked list in-place
// the fn should return the new head of the linked list
// Strategy 1: curr pointer and prev = null pointer 
// Time Complexity:  O(n)
// Space Complexity: O(n) due to callframes
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
a.next = b;
b.next = c;
c.next = d;

const print = head => {
  if (head === null) return;
  console.log(head.val);
  print(head.next);
}

console.log('original list: ')
print(a); // a b c d

// Pass optional argument prev = null. If not passed takes on null value
const reverseList = (curr, prev = null) => {
// base case: end of list 
if (curr === null) {
  // - return new head
  return prev;
}
// temp var 
  const next = curr.next;
  curr.next = prev;
  // shift frame of reference--pass base case up callstack
  return  reverseList(next, curr);
}

console.log('Reverse the list')
const newHead = reverseList(a);
print(newHead) // d c b a


// // Test lists of various sizes
console.log('Test List - 3 nodes')
const aaa = new Node('aaa')
const bbb = new Node('bbb')
const ccc = new Node('ccc')

aaa.next = bbb;
bbb.next = ccc;

console.log('Original List aaa');
print(aaa);
console.log('Reversed List');
const newHead2 = reverseList(aaa);
print(newHead2);

console.log('Test List - 1 node')
const aa = new Node('aa')

console.log('Original List aaa');
print(aa);
console.log('Reversed List');
const newHead3 = reverseList(aa);
print(newHead3);
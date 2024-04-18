// ______________________________________________________

//  1:        Rotate LinkedList to right by`k` nodes
//  Level:    Hard
//            The Challenge (Hard):
// Given the head of a singly LinkedList and a number 'k', rotate the LinkedList to the right by 'k' nodes. 

// If, in the end, you are left with a sub-list with less than 'k' elements, reverse it too. 
// ------------------------------------------------------

class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
  // convenience methods
  getList() {
    let result = '',
        temp = this
    
    while (temp) {
      result += temp.value + ' '
      temp = temp.next
    }
    
    return result
  }

  getListLength() {
    let temp = this,
        length = 0
    while (temp) {
      length++
      temp = temp.next
    }
    return length
  }
}

// outer method for rotate fn
const findLastNodes = head => {
  
  let current = head,
      prev = null
  
  while (current.next) {
    prev = current
    current = current.next
  }
  return {
    lastNode: current,
    secondToLastNode: prev
  }    
}

const rotate = (head, rotations) => {

  console.log('head.getListLength()', head.getListLength())

  rotations = rotations % head.getListLength()
  for (let i = 0; i < rotations; i++) {
    // 2
    const { lastNode, secondToLastNode } = findLastNodes(head)
    // 3 & 4
    secondToLastNode.next = null
    // 5
    lastNode.next = head
    head = lastNode
  }

  return head
}

// Nodes: 1, 2, 3, 4, 5, 6
head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

// make sure class methods work as defined:
console.log(`Test Case 1: Nodes of the original LinkedList are: ${head.getList()} `)
// Rotate the LinkedList
console.log(`First Test Case: Nodes of rotated LinkedList with 3 rotations: are: ${rotate(head, 3).getList()}`)

// Nodes: 1, 2, 3, 4, 5, 6
head2 = new Node(1)
head2.next = new Node(2)
head2.next.next = new Node(3)
head2.next.next.next = new Node(4)
head2.next.next.next.next = new Node(5)

// make sure class methods work as defined:
console.log(`Test Case 2: Nodes of the original LinkedList are: ${head2.getList()} `)
// Rotate the LinkedList
console.log(`Second Test Case: Nodes of rotated LinkedList with 8 rotations: ${rotate(head2, 8).getList()}`)
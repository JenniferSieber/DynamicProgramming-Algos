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
      this.head = new Node(val)
      return
    }
    let curr = this.head;
    
    while(curr.next !== null) {
      curr = curr.next
    }
    curr.next = new Node(val)
  }

  print() {
    let str = '';
    let curr = this.head;
    while(curr !== null) {
      str += ` ${curr.val} -->`
      curr = curr.next;
    }
    console.log(str)
  }

  contains(target) {
    let curr = this.head;
    while (curr !== null) {
      if (curr.val === target) {
        return true;
      }
      
      curr = curr.next;
    }
    return false;
  }
  
}

// Linked List visualization:
const list = new LinkedList(); 
list.print()      // 
list.append('a') 
list.print()      // a -->
list.append('b') 
list.print()    // a --> b -->
list.append('c')  
list.print()    // a --> b --> c -->
list.append('d') 
list.print()    // a --> b --> c --> d -->
console.log(list.head)
console.log('List contains string `a`? ', list.contains('a'))
console.log('List contains string `b`? ', list.contains('b'))
console.log('List contains string `c`? ', list.contains('c'))
console.log('List contains string `d`? ', list.contains('d'))
console.log('List contains string `x`? ', list.contains('x'))

const list2 = new LinkedList()
list2.append('You can store any data type in a list, like a string!')
list2.append('or a boolean: ')
list2.append(true)
list2.append(false)
list2.print() 
list2.append('or a number: ')
list2.append(11)
list2.print() 
list2.append('or an array: ')
list2.append([11,7,7,7,7,7,7,7,11])
list2.print() 
list2.append('Store Duplicate Values in a Linked List.')
list2.append('duplicate')
list2.append(1)
list2.append('duplicate')
list2.append(2)
list2.append('duplicate')
list2.append(3)
list2.print()
console.log('Is duplicate in this Linked List? ', list2.contains('duplicate'))
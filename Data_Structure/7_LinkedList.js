// Linked List

// A linked list is a linear data structure that includes a series of connected nodes
// Each node consists of a data value and a pointer that points to the next node
// The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure
// Random access of elements is not feasible and accessing an element has linear time complexity   
// The linked list data structure supports three main operations:
// Insertion - to add an element at the beginning, end or at a given index in the list   
// Deletion - to remove an item given its index or value
// Search - to find an element given its value

// Used in application of stack and queue ex: image slide show

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }

    //O(1)
    prepend(value) {
      const node = new Node(value)
      if(this.isEmpty()){
        this.head = node
      } else{
        node.next=this.head
        this.head=node
      }
      this.size++
    }

    // O(n)
    append(value) {
      const node = new Node(value);
    
      if (this.isEmpty()) {
        this.head = node;
      } else {
        let prev = this.head;
        while (prev.next) {
          prev = prev.next;
        }
        prev.next = node;
      }
    
      this.size++;
    }

    insert(value, index) {
      if (index < 0 || index > this.size) {
        return; // Invalid index, do nothing
      }
    
      if (index === 0) {
        this.prepend(value); // Insert at the beginning
      } else {
        const node = new Node(value);
        let prev = this.head;
    
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next; // Traverse to the node before the insertion point
        }
    
        node.next = prev.next; // Connect the new node to the next node
        prev.next = node; // Connect the previous node to the new node
      }
    
      this.size++;
    }

    print() {
      if (this.isEmpty()) {
        console.log('List is empty');
      } else {
        let curr = this.head;
        let listValues = '';
        while (curr) {
          listValues += `${curr.value} `;
          curr = curr.next;
        }
        console.log(listValues);
      }
    }
  }
  
  const list = new LinkedList();
  console.log('List is empty?', list.isEmpty());
  list.print()
  console.log('List size:', list.getSize());

  list.prepend(12)
  list.print()
  list.prepend(14)
  list.prepend(13)
  list.print()

  list.append(10)
  list.print()

  list.insert(23, 1)
  list.print()
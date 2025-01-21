//Queue : First in First Out

let q = [];

// Enqueue (add to the back)
q.push(1);
q.push(2);
q.push(3);

console.log(q); // Output: [1, 2, 3]

// Dequeue (remove from the front)
let frontElement = q.shift();
console.log(frontElement); // Output: 1
console.log(q);        // Output: [2, 3]

frontElement = q.shift();
console.log(frontElement); // Output: 2
console.log(q);        // Output: [3]

frontElement = q.shift();
console.log(frontElement); // Output: 3
console.log(q);        // Output: [] (empty)

frontElement = q.shift(); // Trying to dequeue from an empty queue
console.log(frontElement); // Output: undefined

//Queue Implementation

//1. enqueue(elemet) - add
//2. dequeue() - remove old element
//3. peek() - get the value of element at front of queue
//4. isEmpty() -  check empty or not
//5. size() - get the number of element in queue
//6. print() - visualize the element in the queue

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
        return "Underflow"; // Return a message if the queue is empty
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue)
console.log(queue.print())

console.log(queue.size())
// queue.print()

console.log(queue.dequeue())
console.log(queue.print())
console.log(queue.isEmpty())
console.log(queue.peek())

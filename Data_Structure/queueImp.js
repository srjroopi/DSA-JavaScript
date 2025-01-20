class Queue {
  constructor() {
    this.items = {};
    this.rear = 1;
    this.front = 1;
  }

  equeue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.equeue(10);
queue.equeue(20);
queue.equeue(30);

console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());

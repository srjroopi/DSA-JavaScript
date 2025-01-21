// stack: last in, first out
// Stack

// The stack data structure is a sequential collection of elements that follows the principle of Last In First Out (LIFO).
// The last element inserted into the stack is the first element to be removed.   
// A stack of plates. The last plate placed on top of the stack is also the first plate removed from the stack.
// Stack is an abstract data type. It is defined by its behavior rather than being a mathematical model.
// The Stack data structure supports two main operations:   
// Push, which adds an element to the collection
// Pop, which removes the most recently added element from the collection

let stack = [];

// Push (add to the top)
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack); // Output: [1, 2, 3]

// Pop (remove from the top)
let topElement = stack.pop();
console.log(topElement); // Output: 3
console.log(stack);      // Output: [1, 2]

topElement = stack.pop();
console.log(topElement); // Output: 2
console.log(stack);      // Output: [1]

topElement = stack.pop();
console.log(topElement); // Output: 1
console.log(stack);      // Output: [] (empty)

topElement = stack.pop(); // Trying to pop from an empty stack
console.log(topElement); // Output: undefined (in some environments it might throw an error)
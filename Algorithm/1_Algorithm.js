// Algorithms
// Topics :
// 1. Algorithms
// 2. Measuring Performance
// 3. Big O Notation
// 4. Math Algorithms
// 5. Sorting Algorithms
// 6. Searching Algorithms
// 7. Misc Algorithms and Problem Solving

// What is an Algorithm?

// - An algorithm is a set of instructions to solve a problem.
// - It should be language-independent
// - 1 problem can be solved in many ways using a different algorithm
// - The absolute running time of an algorithm can't be predicted since it depends on many factors. Many factors are Based on the operating system, Other programs running simultaneously, the Programming language used and so on...
// - we evaluate the performance in terms of its input size:

// Time Complexity: Amount of time taken by an algorithm to run as a function of input size.
// Space Complexity: Amount of memory taken by an algorithm to run as a function of input size.

// To Represent the time and space complexity of an algorithm:
// Asymptotic Notation:
// Mathematical Tools to Represent Time and Space Complexity.

// 1. Big-O Notation - Worst-Case Complexity
// 2. Omega Notation - Best Case complexity
// 3. Theta Notation - Average case complexity

// Big-O Notation:
// - It describes the complexity using algebraic Terms.
// - It has two important characteristics: 1. it is expressed in terms of input, and 2. it focuses on the bigger picture without getting caught up in the minute details

// Big-O Time Complexity:
function summation(n) {
    let sum = 0; // ----------------- 1 time excecute 
    for (let i = 1; i <= n; i++) {
      sum += i; // ----------------- n time excecute(depends on the input(n))
    }
    return sum; // ----------------- 1 time excecute
  }
  console.log(summation(5)); //Output = 15
  //its represented as (n+2) 
  //Big-O Notation Time Complexity: O(n) - Linear; if input increases time increases

function constant(n){
    return(n * (n + 1))/2 // -------- it excecute only one time
  }
  console.log(constant(3))// Output = 6
  //its represented as 1
  //Big-O Notation time complexity: O(1) - Constant

// If its two nested loop the expression will be Quadratic:
// O(n^2) - Quadratic, 3n^2+5n+1
function qua(n){
    for (i=1; i<=n; i++){
        for (j=1; j<=i; j++){
            return i+j
        }
    }
  }
  console.log(qua(3))
//its represented as n^2
//if its 3 nestes loops then its n^3 - O(n^3) -Cubic
// input size reduces by half every iteration - O(log(n)) - logarithm
// input size increase by half every iteration - O(2^n) - exponential

// O(1)     - Constant Time        : Operation time does not change with the size of the input.
// O(log n) - Logarithmic Time     : Operation time increases logarithmically as input size increases.
// O(n)     - Linear Time          : Operation time increases linearly with the size of the input.
// O(n log n) - Linearithmic Time  : Operation time increases in proportion to n log n.
// O(n^2)   - Quadratic Time       : Operation time increases quadratically with the size of the input.
// O(n^3)   - Cubic Time           : Operation time increases cubically with the size of the input.
// O(2^n)   - Exponential Time     : Operation time doubles with each additional input.
// O(n!)    - Factorial Time       : Operation time increases factorially with the size of the input.

// O(1): Accessing an element in an array by index.
// O(log n): Binary search.
// O(n): Linear search.
// O(n log n): Merge sort, Quick sort (average case).
// O(n^2): Bubble sort, Selection sort, Insertion sort.
// O(n^3): Matrix multiplication (naive approach).
// O(2^n): Solving the Towers of Hanoi.
// O(n!): Solving the Traveling Salesman Problem with brute-force

// Objects Big O
const pearson = {
    firstname : 'R',
    lastname : 'A'
}
console.log(pearson.firstname)// O(1) - Constant
// access, insert, delete, update - O(1)
// search, Object.keys(), Object.values(), Object.entries() - O(n)

// Arrays Big O
const arr = [1,2,3,4]
console.log(arr[0])
// insert/ remove at end, access, push/pop - O(1)
// insert/remove at start, search, shift/unshift/concat/splice/slice, forEach/map/filter - O(n)


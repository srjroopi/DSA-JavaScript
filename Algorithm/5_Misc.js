// Cartesian Product
// the Cartesian product of two sets A and B, denoted A × B, 
// is the set of all ordered pairs (a, b) where a is in A and b is in B.
// A=[1,2] B=[3,4] => AxB=[[1,3] [1,4] [2,3] [2,4]]
function cartesian(A, B){
    const D=[]
    for(const master of A ){
        for (const element of B){
            const C = [master, element]
            D.push(C)
        }
    } return D
}
const A=[1,2]
const B=[3,4]
console.log(cartesian(A, B)) //[ [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ] ] Big-O = O(mn)

//Climbing Staircase
// There are n stairs, and a person standing at the bottom wants to climb stairs to reach the top. 
// The person can climb either 1 stair or 2 stairs at a time, the task is to count the number of ways that a person can reach at the top.
// Input: n = 4 
// Output: 5 
// Explanation: There are five ways to reach 4th stair: {1, 1, 1, 1}, {1, 1, 2}, {2, 1, 1}, {1, 2, 1} and {2, 2}. 
function Staircase(n){
    if (n === 0 || n === 1)
        return 1;
    return Staircase(n - 1) + Staircase(n - 2); //countWays(n) = countWays(n-1) + countWays(n-2)
}
console.log("Staircase",Staircase(5)) // 8, O(2^n)

function Staircase1(n){
    const noOfWays = [1,2]
    for(let i=2;i<=n;i++){
        noOfWays[i] = noOfWays[i-1]+noOfWays[i-2]
    }
    return noOfWays[n-1]; //countWays(n) = countWays(n-1) + countWays(n-2)
}
console.log("Staircase1",Staircase1(5)) // 8, O(n)

// Tower of Hanoi
// Tower of Hanoi is a mathematical puzzle where we have three rods (A, B, and C) and N disks. 
// Initially, all the disks are stacked in decreasing value of diameter i.e., 
// the smallest disk is placed on the top and they are on rod A. 
// The objective of the puzzle is to move the entire stack to another rod (here considered C), obeying the following simple rules: 

// 1. Only one disk can be moved at a time.
// 2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
// 3. No disk may be placed on top of a smaller disk

// Input: 3
// Output: Disk 1 moved from A to C
// Disk 2 moved from A to B
// Disk 1 moved from C to B
// Disk 3 moved from A to C
// Disk 1 moved from B to A
// Disk 2 moved from B to C
// Disk 1 moved from A to C

function towerOfHanoi(n, source, destination, auxiliary) {
    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${destination}`);
      return;
    }
    towerOfHanoi(n - 1, source, auxiliary, destination);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, auxiliary, destination, source);
  }
const result = towerOfHanoi(2, 'A', 'B', 'C')
//  O(2^n)

// Algorithm design techniques

// Brute force - Simple and exhaustive technique that evaluates every possible outcome to find the best solution. 
// Ex: Linear search   

// Greedy - Choose the best option at the current time, without any consideration for the future. 
// Ex: Dijkstra's algorithm, Prim's algorithm and Kruskal's algorithm

// Divide and Conquer - Divide the problem into smaller sub-problems. Each sub-problem is then solved and the partial solutions are recombined to determine the overall solution. 
// Ex: Binary Search, Quick Sort, Merge Sort and Tower of Hanoi   

// Dynamic Programming - Divide the problem into smaller sub-problems. Break it down into smaller but overlapping sub problems. Store the result and reuse it for the same sub-problems. 
// This is called memoization and is a optimization technique that improves the time complexity of your algorithm. Ex: Fibonacci numbers and climbing staircase   

// Backtracking - Generate all possible solutions. Check if the solution satisfies all the given constraints and only then you proceed with generating subsequent solutions. If the constraints are not satisfied, backtrack and go on a different path to find the solution.
// Ex: N-Queens problem   

// Finding the GCD using Euclidean algorithm
function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }
console.log("GCD",gcd(24, 18))
// Time Complexity: O(log(min(a, b)))
// Space Complexity: O(log(min(a, b))) due to recursive function calls

//Finding permutations and combinations of a list of numbers
function permute(nums) {
    if (nums.length === 0) {
      return [];
    }
    if (nums.length === 1) {
      return [nums];
    }
  
    let result = [];
    for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
      const subPermutations = permute(remainingNums);
  
      for (let j = 0; j < subPermutations.length; j++) {
        result.push([currentNum, ...subPermutations[j]]);
      }
    }
    return result;
  }
  
  function combinations(nums, k) {
    if (k === 0) {
      return [[]];
    }
    if (nums.length < k) {
      return [];
    }
  
    let result = [];
    for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const remainingNums = nums.slice(i + 1);
      const subCombinations = combinations(remainingNums, k - 1);
  
      for (let j = 0; j < subCombinations.length; j++) {
        result.push([currentNum, ...subCombinations[j]]);
      }
    }
    return result;
  }
// Time Complexity: For both permutations and combinations, the time complexity is O(n!), where n is the number of elements in the list. This is because we generate all possible arrangements or selections.
// Space Complexity: O(n!) due to the recursive function calls and storing the results.

//Finding the longest common substring in a given string
function longestCommonSubstring(str1, str2) {
    const dp = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));
  
    let maxLength = 0;
    let endIndex = 0;
  
    for (let i = 1; i <= str1.length; i++) {
      for (let j = 1; j <= str2.length; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
          if (dp[i][j] > maxLength) {
            maxLength = dp[i][j];
            endIndex = i - 1; // Store the end index of the longest substring
          }
        }
      }
    }
  
    return str1.substring(endIndex - maxLength + 1, endIndex + 1);
  }
//Time Complexity: O(m * n), where m and n are the lengths of the two strings.
//Space Complexity: O(m * n) to store the dynamic programming table.

// Knapsack problem
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));
  
    for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= capacity; w++) {
        if (weights[i - 1] <= w) {
          dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
  
    return dp[n][capacity];
  }
//Time Complexity: O(n * capacity)
//Space Complexity: O(n * capacity) to store the dynamic programming table.
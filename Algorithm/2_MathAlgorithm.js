//Big O Guide

// not dependent on input size - O(1)
// 1 loop - O(n)
// 2 nested loop - O(n^2)
// input reduce by half - O(logn)

//Fibonacci Sequence
// Find the first n elements of the fibonacci sequence
function fibonacci(n) {
    const a = [0,1] // -------------- O(1)
    for( i=0; i<n-1; i++){ // ---------O(n)
        c = a[i]+a[i+1]
        a.push(c) // ------------ O(1)
    } // ------------------since O(n) is dominante of the function.
    return a
}
console.log(fibonacci(4)) // [0,1,1,2,3] Time, space = O(n)

//Factorial of a number
function fac(n){
    let result = 1
    for(i=1; i<=n; i++){ //-------------0(n)
        result = result * i
    }
    return result
}
console.log(fac(4)) // 24 Time, Space = O(n)

// Prime of a number
function isPrime(n){
    if(n<2) return false
    for(i=2; i <= Math.sqrt(n); i++){ //------------0(sqrt(n))
        if(n%i==0) 
        return false
    } return true
}
console.log(isPrime(7)) // true Time, Space = O(sqrt(n))

// Find number is power of 2 are not
function isPowerOfTwo(n){
    if(n==0) return false
    while(n>1){
        if(n%2!=0) 
            return false
        }
        n = n/2
    }
console.log(isPowerOfTwo(9)) // false Time, Space = O(logn)
//
function isPowerOfTwoBitWise(n){
    if (n<1) return false
    return (n&(n-1))==0
}
console.log(isPowerOfTwoBitWise(9)) // false Time, Space = O(1)

// Recursion 
// Recursion is a technique in which a function calls itself in order to solve smaller instances of a problem. It is a common method in algorithms, especially for problems that can be divided into similar sub-problems.

// A recursive function has two main parts:

// Base Case: The condition that stops the recursion. Without a base case, the function would call itself infinitely.
// Recursive Case: The part of the function where it calls itself with a smaller or simpler input.
// How Recursion Works
// Recursive Call: The function performs a small part of the task and then calls itself to handle the remaining part.
// Base Case: Once the function reaches the simplest form of the problem (base case), it stops calling itself and starts returning values up the call stack.

// Factorial Numbers using recursion
function factorial(n){
    if(n==0) return 1 // base case
    else return n * factorial(n-1) // recursive case
    }
    console.log(factorial(5)) // 120 Time, Space = O(n)
    
// Fibonacci Series using recursion
function fibonacci(n){
    if(n==0) return 0
    else if(n==1) return 1
    else return fibonacci(n-1) + fibonacci(n-2) // it calls 2^n times of the function 
    }
console.log(fibonacci(10)) // 55 Time, Space = O(2^n) it is not good method to perform fibonacci using recursion
        
// Binary Search using recursion
function binarySearch(arr, target){
    if(arr.length==0) return -1
    let mid = Math.floor(arr.length/2)
    if(arr[mid]==target) return mid
    else if(arr[mid]>target) return binarySearch(arr.slice(0,mid), target)
        else return binarySearch(arr.slice(mid+1), target)
    }
console.log(binarySearch([1,2,3,4,5,6,7],6))
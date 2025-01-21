const arg = [2,3,4,"ya"]
arg.push("you")
arg.unshift(0)  //add new element at start of the array
arg.pop()
arg.shift() //remove the element at beginning.
for (const items of arg){ 
  console.log(items)
}
//items of arg = 0,2,3,4,ya,you
//items in arg = 0,1,2,3,4,5

// map: Creates a new array by applying a function to each element of the original array.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(number => number * number); 
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// concat: Creates a new array by merging two or more arrays together.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2); 
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// slice:  Creates a shallow copy of a portion of an array
const fruits = ["apple", "banana", "orange", "grape"];
const slicedFruits = fruits.slice(1, 3); 
console.log(slicedFruits); // Output: ["banana", "orange"]

// filter: Creates a new array containing only the elements that pass a test provided by a function.
const ages = [18, 25, 16, 30, 20];
const adults = ages.filter(age => age >= 18); 
console.log(adults); // Output: [18, 25, 30, 20]

// reduce: Applies a function to an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
const num = [1, 2, 3, 4];
const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
console.log(sum); // Output: 10

// splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const colors = ["red", "green", "blue"];

// Remove one element from index 1
colors.splice(1, 1); 
console.log(colors); // Output: ["red", "blue"]

// Remove two elements from index 0 and add "yellow" and "orange"
colors.splice(0, 2, "yellow", "orange"); 
console.log(colors); // Output: ["yellow", "orange"]

// Array - Big-O time complexity

// Insert / remove from end - O(1)
// Insert / remove from beginning - O(n)
// Access - O(1)
// Search - O(n)
// Push / pop - O(1)
// Shift / unshift / concat / slice / splice - O(n)
// forEach / map / filter / reduce - O(n)




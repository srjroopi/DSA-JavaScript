// Here are some key characteristics:

// Uniqueness: A Set only stores unique values. Duplicate values are automatically ignored and not added to the set.
// No Order: Sets do not maintain any specific order of elements.
// Iteration: You can easily iterate over the values in a Set using methods like forEach, for...of loop.

const set = new Set([2, 3, 4, "gh"]);
set.add(1);
console.log(set.has(4));
//set.delete('gh')
//set.clear()
for (const item of set) {
  console.log(item);
}

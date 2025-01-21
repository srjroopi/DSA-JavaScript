// In JavaScript, a Map is a data structure that stores key-value pairs, where each key is unique. 
// Unlike objects where keys are implicitly converted to strings, Map keys can be any data type, including:

// Primitive types (numbers, strings, booleans, symbols, null, undefined)
// Objects
// Functions
// This flexibility makes Maps very powerful for various use cases.

const map = new Map([
  ["a", 1],
  ["b", 2],
]);
map.set("c", 3);  //here set is add not set method
console.log(map.get("a"));
console.log(map.has("b"));
// map.delete('c')
console.log(map.size);
// map.clear()
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

const o = {
    name:"ya",
    age:23,
    'key':true
}
o.hoddy = "painting"    //adding
delete o.hoddy          //deleting
console.log(o)
console.log(o['key']) //use if object is in "----"
//////////////////////////////////////////////////////////////////
const obj = {
    name: "ya",
    age: 23,
    "key" : true,
    sayMyName: function(){
      console.log(this.name)    // this refer to the object(obj) it take the same value as the obj
    }
  }
  console.log(obj)
  obj.sayMyName()

///////////////////////////////////////////////////////////
//obj.keys(), .value(), .entries()
  const person = {
    name: "Alice",
    age: 25,
    city: "New York"
  };
  
  // Get all keys: Returns an array of all the keys present in the given object.
  const keys = Object.keys(person);
  console.log(keys); // ["name", "age", "city"]
  
  // Get all values:  Returns an array of all the values associated with the keys in the given object.
  const values = Object.values(person);
  console.log(values); // ["Alice", 25, "New York"]
  
  // Get all key-value pairs: Returns an array of key-value pairs as arrays within it.
  const entries = Object.entries(person);
  console.log(entries); 
  // [["name", "Alice"], ["age", 25], ["city", "New York"]]

//Object - Big-O time complexity

// Insert - O(1)
// Remove - O(1)
// Access - O(1)
// Search - O(n)
// Object.keys() - O(n)
// Object.values() - O(n)
// Object.entries()1 - O(n)
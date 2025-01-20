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

const obj = {
  name: "sdfg",
  age: 23,
  "key" : true,
  sayMyName: function(){
    console.log(this.name)
  }
}

console.log(obj.sayMyName)
console.log(obj.key)
obj.sayMyName()
const person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

// Get all keys
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "city"]

// Get all values
const values = Object.values(person);
console.log(values); // ["Alice", 25, "New York"]

// Get all key-value pairs
const entries = Object.entries(person);
console.log(entries); 
// [["name", "Alice"], ["age", 25], ["city", "New York"]]




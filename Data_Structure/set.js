const set = new Set([2, 3, 4, "gh"]);
set.add(1);
console.log(set.has(4));
//set.delete('gh')
//set.clear()
for (const item of set) {
  console.log(item);
}

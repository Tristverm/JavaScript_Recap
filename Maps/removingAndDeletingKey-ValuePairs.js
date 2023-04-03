// create a new Map
let myMap = new Map();

// add some key-value pairs to the map
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

// use the delete() method to remove a specific key-value pair from the map
myMap.delete('key1');

console.log(myMap);
// output: Map(1) { 'key2' => 'value2' }

// use the clear() method to remove all key-value pairs from the map
myMap.clear();

console.log(myMap);
// output: Map(0) {}

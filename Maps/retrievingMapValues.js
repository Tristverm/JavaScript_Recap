// create a new Map
let myMap = new Map();

// add some key-value pairs to the map
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

// retrieve values from the map using the get() method
console.log(myMap.get('key1')); // output: 'value1'
console.log(myMap.get('key2')); // output: 'value2'

// if the key is not present in the map, get() will return undefined
console.log(myMap.get('key3')); // output: undefined

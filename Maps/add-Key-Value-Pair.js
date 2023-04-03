//The Map.set() method in JavaScript is used to add or update a key-value pair in a Map object. The method takes two arguments: the key and the value to be added to the map. If the key already exists in the map, its corresponding value will be updated with the new value provided in the second argument.
// Here's an example of using the Map.set() method:
// create a new map
let myMap = new Map();

// add key-value pairs to the map using the set() method
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

// update an existing key-value pair using the set() method
myMap.set('key1', 'newvalue1');

console.log(myMap);
// output: Map(2) { 'key1' => 'newvalue1', 'key2' => 'value2' }


//ALTERNATIVELY
//The Map() constructor in JavaScript can take an optional iterable as its argument. The iterable should be an array (or any other iterable object) of arrays, where each inner array contains two elements representing a key-value pair to add to the map.
//Here's an example of creating a Map object using an iterable argument:
// create a new Map using an iterable argument
let myMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    [3, 'value3'],
    [true, 'value4']
  ]);
  
  console.log(myMap);
  // output: Map(4) { 'key1' => 'value1', 'key2' => 'value2', 3 => 'value3', true => 'value4' }
  
  //In this example, we create a new Map object by passing an array of arrays as an argument to the Map() constructor. Each inner array contains two elements representing a key-value pair to add to the map. The resulting Map object has four key-value pairs, where the keys are 'key1', 'key2', 3, and true, and the corresponding values are 'value1', 'value2', 'value3', and 'value4', respectively.
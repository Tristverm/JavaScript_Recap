//In JavaScript, you can iterate over the values of a Map object using the Map.values() method. This method returns an iterator object that contains all the values of the Map object in insertion order.

//Here's an example of iterating over the values of a Map object:

// create a new map
let myMap = new Map();

// add some key-value pairs to the map
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

// iterate over the values of the map using the values() method
for (let value of myMap.values()) {
  console.log(value);
}
// output: 'value1', 'value2', 'value3'

//In this example, we first create a new Map object and add three key-value pairs to it. Then, we use the Map.values() method to get an iterator object that contains all the values of the Map object in insertion order. We then iterate over the values using a for..of loop and log each value to the console.


//You can also use the forEach() method of the Map object to iterate over its values:


myMap.forEach((value) => {
    console.log(value);
  });
  // output: 'value1', 'value2', 'value3'
  

  //In this example, we use the forEach() method to iterate over the values of the Map object. The forEach() method takes a callback function as its argument, which is called once for each key-value pair in the map. The value parameter of the callback function represents the value of the current key-value pair being iterated over, which we log to the console.
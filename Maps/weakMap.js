// A WeakMap is a built-in data structure in JavaScript that allows you to store key-value pairs where the keys are weakly held.


// This means that if there are no references to a key in a WeakMap, the key-value pair will be automatically removed from memory by the garbage collector. This makes WeakMap useful for scenarios where you want to associate metadata with an object without keeping the object itself alive.

// Here's an example of how to use WeakMap:


let map = new WeakMap();

let obj1 = { name: "John" };
let obj2 = { name: "Mary" };

map.set(obj1, "some data related to John");
map.set(obj2, "some data related to Mary");

console.log(map.get(obj1)); // "some data related to John"
console.log(map.get(obj2)); // "some data related to Mary"


// In this example, we create a WeakMap instance called map. We then create two objects obj1 and obj2, and associate them with some metadata using the map.set() method. Finally, we retrieve the metadata associated with each object using the map.get() method.


//Note that WeakMap keys must be objects, and the values can be any type of value. Also, WeakMap does not have the same iteration and manipulation methods as Map and Set, because the garbage collector may remove items from the WeakMap at any time, so it's not possible to guarantee the order or availability of the keys.q
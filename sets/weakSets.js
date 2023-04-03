// A WeakSet in JavaScript is a built-in object that allows you to store a collection of weakly held objects. The key feature of WeakSet is that it only holds weak references to the objects that it contains. This means that if there are no other strong references to an object, and it is only held in memory by a WeakSet, then it can be garbage collected by the JavaScript runtime.

//Here is an example implementation of a WeakSet:

// create a new WeakSet
const myWeakSet = new WeakSet();

// create some objects to add to the WeakSet
const obj1 = { name: 'John', age: 30 };
const obj2 = { name: 'Jane', age: 25 };
const obj3 = { name: 'Bob', age: 40 };

// add the objects to the WeakSet
myWeakSet.add(obj1);
myWeakSet.add(obj2);
myWeakSet.add(obj3);

// check if an object is in the WeakSet
console.log(myWeakSet.has(obj1)); // true

// remove an object from the WeakSet
myWeakSet.delete(obj2);

// check the size of the WeakSet
console.log(myWeakSet.size); // undefined (WeakSets don't have a size property)


//In this example, we create a new WeakSet object and then add three objects to it. We then check if the first object is in the WeakSet, remove the second object from the WeakSet, and finally check the size of the WeakSet. Note that WeakSet objects do not have a size property like Set objects do.


//One thing to note is that because WeakSet objects hold weak references to their elements, you cannot store primitive values like numbers or strings in a WeakSet. You can only store objects or other collections.

//Another important detail is that you cannot iterate over the elements of a WeakSet, so you cannot use methods like forEach() or for...of loops to access its elements. The primary use of a WeakSet is to store objects that you want to track for some reason, without having a strong reference to them. For example, you might use a WeakSet to keep track of the elements of a widget in a web application, so that you can remove them from memory when the widget is destroyed.
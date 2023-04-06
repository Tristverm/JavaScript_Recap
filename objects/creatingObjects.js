//JavaScript objects are used to represent a collection of related data, functionality, and properties in a structured manner. Objects in JavaScript are key-value pairs, where the key represents a unique identifier for the value, and the value can be of any type including strings, numbers, booleans, functions, or even other objects.
// Objects in JavaScript are defined using curly braces {}, with each key-value pair separated by a comma. The key is usually a string that identifies the value, and is followed by a colon : and the value itself.
//Here's an example of a simple object in JavaScript:
const person = {
  name: "John",
  age: 30,
  isMarried: true,
  hobbies: ["reading", "golf", "travel"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },
};

// In this example, we've defined an object called person. It has several properties, including name, age, isMarried, hobbies, and address. The address property is itself an object, with its own properties like street, city, state, and zip. The object also has a method (a function that belongs to the object) called sayHello, which logs a greeting message to the console.

//We can access the values of an object's properties using dot notation or bracket notation. For example, to access the name property of the person object, we can use either of the following syntaxes:

console.log(person.name); // Output: John
console.log(person["name"]); // Output: John


//Objects in JavaScript are mutable, which means we can add, remove, or modify their properties after they are defined. For example, we can add a new property to the person object like this:

person.email = "john@example.com";


//Now, the person object has a new property called email with the value "john@example.com". We can also delete a property using the delete keyword, like this:



delete person.isMarried;


//Now, the isMarried property has been removed from the person object.


// In summary, JavaScript objects are a powerful and flexible way to represent complex data structures in a structured manner. They allow us to group related data and functionality together, and provide an easy way to access and manipulate that data.
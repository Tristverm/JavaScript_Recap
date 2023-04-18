//The "this" keyword in JavaScript refers to the object that is currently executing the current function or code block. It is a reference to the current execution context, which could be the global object, a function, an object, or a class.

// The value of "this" keyword depends on how a function is invoked. There are four ways to invoke a function in JavaScript, and each of them determines the value of "this" keyword:



//Global context: When a function is invoked in the global scope, the value of "this" keyword is the global object (window in the browser and global in Node.js).

//Example

console.log(this); // logs the global object (window or global)


//Function context: When a function is invoked as a method of an object, the value of "this" keyword is the object that the method belongs to.

//Example:
const person = {
    name: "John",
    age: 30,
    sayHello: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
  person.sayHello(); // logs "Hello, my name is John and I am 30 years old."
  
  

  //Constructor context: When a function is used as a constructor with the "new" keyword, the value of "this" keyword is the newly created object that the constructor returns.

  //Example:

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const john = new Person("John", 30);
  console.log(john); // logs { name: "John", age: 30 }
  

  //Call or Apply context: When a function is invoked using the "call" or "apply" method, the value of "this" keyword is the object that is passed as the first argument to the method.
  const person1 = { name: "John", age: 30 };
  const person2 = { name: "Sarah", age: 25 };
  
  function sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
  
  sayHello.call(person1); // logs "Hello, my name is John and I am 30 years old."
  sayHello.apply(person2); // logs "Hello, my name is Sarah and I am 25 years old."

  
  //It's important to note that the value of "this" keyword is not determined by where the function is defined, but rather by how it is invoked. Understanding the different contexts in which "this" keyword can be used can help you write more effective and flexible code in JavaScript.




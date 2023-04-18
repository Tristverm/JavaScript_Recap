// In JavaScript, getters and setters are special methods that allow us to define a property of an object and control how that property is accessed and modified. Getters and setters are often used to provide a level of abstraction over an object's properties, allowing us to execute custom code when a property is accessed or modified.


// To create a getter or setter in JavaScript, we define a special method with the name of the property we want to get or set. For example, if we have an object with a property called age, we can create a getter and setter for that property using the following syntax:


const person = {
    _age: 25, // underscore denotes a private property
  
    get age() {
      return this._age;
    },
  
    set age(value) {
      if (value < 0) {
        console.log("Age can't be negative");
      } else {
        this._age = value;
      }
    }
  };
  

  //In this example, we define a private property _age with an initial value of 25. We then define a getter and setter for the age property using the get and set keywords. The getter simply returns the value of _age, while the setter checks whether the new value is negative and logs an error message if it is. If the new value is non-negative, it sets the value of _age to the new value.

//To access and modify the age property of the person object, we can use dot notation as usual:

console.log(person.age); // Output: 25

person.age = 30;
console.log(person.age); // Output: 30

person.age = -5; // Output: "Age can't be negative"
console.log(person.age); // Output: 30 (value remains unchanged)


//Notice that we don't need to call the getter and setter methods directly. Instead, we access and modify the age property as if it were a regular property of the person object. When we read the age property, the getter method is automatically called and returns the value of _age. When we write to the age property, the setter method is automatically called and sets the value of _age to the new value if it's valid.



//Getters and setters can be useful for a variety of purposes, such as validating input, accessing private data, and executing custom logic when a property is accessed or modified.




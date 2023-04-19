//In JavaScript, a class is a blueprint or template for creating objects that encapsulate data and behavior. It allows you to define a set of properties and methods that are shared by all instances of the class.

//The class syntax was introduced in ECMAScript 2015 (ES6) and provides a more familiar syntax for programmers coming from other object-oriented languages. A class is defined using the class keyword, followed by the name of the class, and a set of curly braces containing the properties and methods of the class.

//Here's an example of a simple class in JavaScript:

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getAge() {
    return new Date().getFullYear() - this.year;
  }

 get getMakeAndModel() {
    return this.make + ' ' + this.model;
  }
};
let myCar = new Car('Honda', 'Civic', 2018);


//This creates a new instance of the Car class with the make property set to 'Honda', the model property set to 'Civic', and the year property set to 2018.

//You can then call the methods of the myCar object, like this:

console.log(myCar.getAge()); // output: 5
console.log(myCar.getMakeAndModel); // output: Honda Civic





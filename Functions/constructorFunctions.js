//In JavaScript, function constructors are a way to create objects based on a given template or blueprint. The basic idea is to define a function that serves as a constructor, and then use the "new" keyword to create new objects from that constructor. The constructor function defines the properties and methods of the object, and each instance created from the constructor will inherit those properties and methods.

//Here is an example of a function constructor in JavaScript:

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
}


  //In this example, we define a function constructor called "Person". The constructor takes three parameters: "firstName", "lastName", and "age". Inside the constructor, we define three properties using the "this" keyword: "firstName", "lastName", and "age". We also define a method called "fullName" that returns the full name of the person.

//To create a new person object from this constructor, we would use the "new" keyword:

var john = new Person("John", "Doe", 30);

//In this example, we create a new person object called "john" using the Person constructor. We pass in the values "John", "Doe", and 30 for the firstName, lastName, and age parameters. The "new" keyword creates a new object based on the Person constructor, and assigns the values of the parameters to the corresponding properties of the object.


//We can now access the properties and methods of the john object:

console.log(john.firstName); // "John"
console.log(john.lastName); // "Doe"
console.log(john.age); // 30
console.log(john.fullName()); // "John Doe"

//In this example, we use dot notation to access the properties of the john object. We also call the fullName() method of the john object using parentheses.


//In summary, function constructors in JavaScript are a way to create objects based on a given template or blueprint. The constructor function defines the properties and methods of the object, and each instance created from the constructor will inherit those properties and methods.

// remember that the caps Person is only syntatctical sugar 
//In the example code provided, the capital "P" in "Person" is simply a convention for indicating that the function is intended to be used as a constructor. By convention, constructor functions in JavaScript are typically named with a capital letter at the beginning of the name, to distinguish them from regular functions.
//The purpose of using a constructor function is to create new objects with a common structure and behavior, based on the definition of the constructor function. In this example, the Person constructor function creates objects that represent people, with properties such as firstName, lastName, and age, and a method called fullName.

//When we use the "new" keyword to create a new object from the constructor function, JavaScript sets up the object's internal structure according to the definition of the constructor function. This allows us to create multiple instances of the same type of object, with consistent structure and behavior, without having to define each one manually.
//So, the capital "P" in "Person" simply serves as a convention to indicate that this is a constructor function, and helps to distinguish it from other functions in the code.










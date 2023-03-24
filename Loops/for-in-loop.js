// In JavaScript, a for-in loop is used to iterate over the properties of an object. The syntax for a for-in loop is as follows:
for (variable in object) {
    // code to be executed
  }
  
  //Here, variable is a variable that will be assigned to each property of the object during each iteration of the loop. The code inside the curly braces will be executed for each property.

//For example, suppose we have an object person with properties name, age, and gender. We can use a for-in loop to iterate over the properties of this object as follows:

const person = {
    name: "John",
    age: 30,
    gender: "Male"
  };
  
  for (let property in person) {
    console.log(property + ": " + person[property]);
  }
  
  //Output:
name: John
age: 30
gender: Male

//In this example, property takes on the values "name", "age", and "gender" during each iteration of the loop, and the corresponding property value is accessed using the square bracket notation (person[property]).

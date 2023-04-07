// Here's an example of dynamically accessing and setting properties on a JavaScript object using bracket notation:
const person = {
    name: 'John',
    age: 30,
  };
  
  // Dynamically access property using bracket notation
  const propertyName = 'name';
  console.log(person[propertyName]); // Output: 'John'
  
  // Dynamically set property using bracket notation
  const newPropertyName = 'address';
  person[newPropertyName] = '123 Main St';
  console.log(person.address); // Output: '123 Main St'
  
  // Define a non-enumerable property
  Object.defineProperty(person, 'ssn', {
    value: '123-45-6789',
    writable: false,
    enumerable: false,
  });
  console.log(person.ssn); // Output: '123-45-6789'
  person.ssn = '987-65-4321'; // This will fail silently in strict mode
  for (const key in person) {
    console.log(key); // Output: 'name', 'age', 'address' (but not 'ssn')
  }
  

  //In this example, we define an object person with two properties, name and age. We then use bracket notation to dynamically access the name property using a variable propertyName, and to dynamically set a new address property using a variable newPropertyName.


  //Finally, we use Object.defineProperty() to define a new property ssn on the person object, but we set it to be non-enumerable and non-writable. This means that it cannot be accessed or modified using dot or bracket notation, and it will not be included in a for...in loop over the object's properties.



//In JavaScript, you can use square bracket notation to dynamically set object properties. This allows you to use variables or expressions to set property names on an object at runtime, rather than specifying them directly in your code.


//Here's an example:

const obj = {};
const propertyName = 'myProp';
const propertyValue = 'myValue';

obj[propertyName] = propertyValue;
console.log(obj); // Output: { myProp: 'myValue' }

  

//In this example, we first create an empty object obj. We then define two variables, propertyName and propertyValue, and assign them the values 'myProp' and 'myValue', respectively.


//Next, we use square bracket notation to set a new property on obj, using the propertyName variable as the property name and the propertyValue variable as the property value.


//Finally, we log the obj object to the console to verify that the new property was set correctly.


//Using square bracket notation to dynamically set object properties can be useful in situations where you don't know the property names or values ahead of time, such as when processing user input or data from an external API.




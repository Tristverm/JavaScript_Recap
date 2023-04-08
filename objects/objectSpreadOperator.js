//The object spread operator is a feature in JavaScript that allows you to create a new object by copying the properties and values of an existing object. Here are some examples:

//Copying an object:
const person = { name: "John", age: 30 };
const copyPerson = { ...person };
console.log(copyPerson); // { name: "John", age: 30 }

//Merging objects:
const person = { name: "John", age: 30 };
const job = { occupation: "Engineer", salary: 50000 };
const personWithJob = { ...person, ...job };
console.log(personWithJob); // { name: "John", age: 30, occupation: "Engineer", salary: 50000 }


//Adding properties to an object:


const person = { name: "John", age: 30 };
const personWithAddress = { ...person, address: "123 Main St" };
console.log(personWithAddress); // { name: "John", age: 30, address: "123 Main St" }


//Overriding properties of an object:

const person = { name: "John", age: 30 };
const personWithNewAge = { ...person, age: 40 };
console.log(personWithNewAge); // { name: "John", age: 40 }


//Creating a shallow copy of an array of objects:


const people = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
const copyPeople = [...people];
console.log(copyPeople); // [{ name: "John", age: 30 }, { name: "Jane", age: 25 }]

//A shallow copy creates a new object with the same properties as the original object, but the properties themselves are not copied. Instead, the new object holds references to the same properties as the original object. This means that if you modify a property of the new object, the original object will also be modified.


//A deep copy, on the other hand, creates a completely new object with new properties, rather than just copying references to the original object's properties. This means that modifying the properties of the new object will not affect the original object.

const original = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  const deepCopy = {...original, address: {...original.address}};
  
  // Modify the deep copy
  deepCopy.address.city = 'Los Angeles';
  
  console.log(original.address.city); // Output: New York
  console.log(deepCopy.address.city); // Output: Los Angeles
  
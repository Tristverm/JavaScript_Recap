// Object destructuring is a feature in JavaScript that allows you to extract properties from an object and assign them to variables. Here are some examples of how you can use object destructuring in JavaScript:

//Example 1: Destructuring an object


// Define an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York"
  };
  
  // Destructure the object
  const { firstName, lastName, age, city } = person;
  
  // Print the extracted properties
  console.log(firstName); // Output: "John"
  console.log(lastName); // Output: "Doe"
  console.log(age); // Output: 30
  console.log(city); // Output: "New York"
  
//In the example above, we defined an object person with some properties such as firstName, lastName, age, and city. We then used object destructuring to extract these properties and assign them to separate variables with the same name.


//Example 2: Destructuring with aliases

// Define an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York"
  };
  
  // Destructure the object with aliases
  const { firstName: fName, lastName: lName, age: personAge, city: personCity } = person;
  
  // Print the extracted properties with aliases
  console.log(fName); // Output: "John"
  console.log(lName); // Output: "Doe"
  console.log(personAge); // Output: 30
  console.log(personCity); // Output: "New York"
  
//In this example, we again defined an object person with some properties, but this time we used aliases during the destructuring process. This means that we assigned new variable names to the extracted properties. For example, we assigned fName to firstName, lName to lastName, personAge to age, and personCity to city.



//Example 3: Destructuring nested objects


// Define an object with nested objects
const person = {
    name: {
      first: "John",
      last: "Doe"
    },
    age: 30,
    city: "New York"
  };
  
  // Destructure the nested object
  const { name: { first, last }, age, city } = person;
  
  // Print the extracted properties
  console.log(first); // Output: "John"
  console.log(last); // Output: "Doe"
  console.log(age); // Output: 30
  console.log(city); // Output: "New York"
  

  //In this example, we defined an object person with a nested object name that contains two properties first and last. We used object destructuring to extract the nested properties and assign them to separate variables with the same names. Note that you can also use aliases in nested destructuring like we did in Example 2.




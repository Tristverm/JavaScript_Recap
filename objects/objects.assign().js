//Object.assign() is a built-in JavaScript function that is used to copy the values of all enumerable properties from one or more source objects to a target object. It returns the modified target object.

//Here's the syntax of Object.assign():

Object.assign(target, ...sources)


//target: The target object that will receive the properties from the source objects.

//sources: One or more source objects whose properties will be copied to the target object.



//Here's an example of using Object.assign() to copy properties from one object to another:

const source = {
    name: 'John',
    age: 30,
  };
  
  const target = {};
  
  Object.assign(target, source);
  
  console.log(target); // Output: { name: 'John', age: 30 }
  

  //In this example, we're creating a source object with two properties (name and age), and an empty target object. We then use Object.assign() to copy the properties from the source object to the target object.



  //We can also use Object.assign() to copy properties from multiple source objects to a target object:

  const source1 = {
    name: 'John',
    age: 30,
  };
  
  const source2 = {
    address: '123 Main St',
    city: 'New York',
  };
  
  const target = {};
  
  Object.assign(target, source1, source2);
  
  console.log(target); // Output: { name: 'John', age: 30, address: '123 Main St', city: 'New York' }
  

  //In this example, we're creating two source objects (source1 and source2) with different properties, and an empty target object. We then use Object.assign() to copy the properties from both source objects to the target object.


  //Note that Object.assign() only copies enumerable properties from the source objects. Also, if multiple source objects have properties with the same name, the property from the last source object in the argument list will overwrite the property from earlier source objects in the target object.




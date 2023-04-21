//Sure, here's an example of how to use Object.create() to create an object that inherits properties and methods from another object:

// Parent object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  // Child object inheriting from person
  const student = Object.create(person);
  
  // Add properties to the student object
  student.studentId = 12345;
  student.major = 'Computer Science';
  
  // Accessing properties and methods of the student object
  console.log(student.firstName); // "John"
  console.log(student.lastName); // "Doe"
  console.log(student.fullName()); // "John Doe"
  console.log(student.studentId); // 12345
  console.log(student.major); // "Computer Science"
  

  //In this example, we create a parent object person that has properties firstName, lastName, and a method fullName() that returns the full name of the person. We then create a child object student using Object.create(person), which inherits the properties and methods of person. We then add properties studentId and major to the student object, and we can access all the properties and methods of both the student and person objects using dot notation.





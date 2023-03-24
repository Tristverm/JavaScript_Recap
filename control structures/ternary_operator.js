// The ternary operator is a shorthand conditional operator in JavaScript that allows you to write a simple if-else statement in a single line of code.

//The syntax of the ternary operator is as follows:

condition ? expression1 : expression2;


//If the condition is true, the operator returns expression1, otherwise it returns expression2.

//Here's an example of using the ternary operator to check if a number is even or odd:

const number = 5;
const result = (number % 2 === 0) ? 'even' : 'odd';
console.log(result); // Output: 'odd'


//In this example, the condition (number % 2 === 0) checks if number is even or not. If it is true, the operator returns the string 'even', otherwise it returns the string 'odd'.

//You can also use the ternary operator to assign values to variables based on a condition. Here's an example:


const age = 25;
const isAdult = (age >= 18) ? true : false;
console.log(isAdult); // Output: true


//In this example, the condition (age >= 18) checks if age is greater than or equal to 18. If it is true, the operator assigns the value true to the variable isAdult, otherwise it assigns the value false.
//
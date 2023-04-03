//Using Array Literals:
//You can create an array by enclosing a list of values inside square brackets []. 

//Here's an example:

const fruits = ['apple', 'banana', 'orange', 'mango'];
console.log(fruits); // Output: ["apple", "banana", "orange", "mango"]


//Using the Array Constructor:

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]


//Using the Spread Operator:


//Using the Spread Operator:
// You can use the spread operator to create a new array by spreading an existing array. 
//Here's an example:
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]


//Using the Array.from() Method:

const string = 'Hello, World!';
const chars = Array.from(string);
console.log(chars); // Output: ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]

//Using the fill() Method:

const newArray = new Array(5).fill(0);
console.log(newArray); // Output: [0, 0, 0,

//Sure! Array.of() is another method you can use to create arrays in JavaScript. It creates a new array with the given arguments as its elements. Here's an example:


const numbers = Array.of(1, 2, 3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

//The difference between Array.of() and the Array constructor is that Array.of() treats the arguments as individual elements, while the Array constructor treats a single argument as the length of the array. Here's an example:

//const numbers = Array.of(3);
console.log(numbers); // Output: [3]

const newNumbers = new Array(3);
console.log(newNumbers); // Output: [undefined, undefined, undefined]

//In the example above, Array.of(3) creates an array with a single element of value 3, while new Array(3) creates an array with a length of 3, but with undefined elements.
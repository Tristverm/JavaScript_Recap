//Array destructuring is a feature in JavaScript that allows you to unpack values from arrays or iterable objects into distinct variables. Here's an example of how array destructuring works:

const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3

// We can also use array destructuring with default values:
const numbers = [1];
const [first = 0, second = 0, third = 0] = numbers;

console.log(first); // 1
console.log(second); // 0
console.log(third); // 0


// In the above example, we set the default value for second and third to 0, which means that if there are no corresponding values in the array, those variables will default to 0.

//Array destructuring can also be used with rest parameters
 const names = ["firstName", "secondName", "lastName"];
 const [fast , ...othernames] = names;

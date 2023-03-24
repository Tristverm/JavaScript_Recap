//A for-loop is a control flow statement in programming that is used to repeatedly execute a block of code. It is particularly useful when you want to execute a block of code a fixed number of times, or iterate over a collection of data, such as an array or object.

//The syntax for a for-loop in JavaScript is as follows:

for (initialization; condition; increment/decrement) {
    // code to be executed
  }
  


//The initialization section sets the initial value of a counter variable used in the loop. The condition section sets the condition that must be true for the loop to continue iterating. The increment/decrement section changes the value of the counter variable after each iteration of the loop.

// Here is an example of a for-loop that iterates over an array of numbers and outputs each value to the console:


const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


//In this example, the initialization section sets the counter variable i to 0, the condition section checks that i is less than the length of the numbers array, and the increment/decrement section increments i by 1 after each iteration of the loop. The code inside the curly braces is executed once for each element of the numbers array, and outputs each element to the console.
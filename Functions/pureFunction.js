//In JavaScript, a function can be categorized as either a pure function or an impure function. The distinction is important because it affects how the function behaves and how it can be used in a program.

//Pure Functions

//A pure function is a function that always returns the same output given the same input, and has no side effects. In other words, it does not modify anything outside of its own scope and does not depend on anything outside of its own scope.

//Here is an example of a pure function:

function square(num) {
    return num * num;
  }
  

  //The square function is pure because it always returns the same output given the same input (e.g., square(2) will always return 4), and it does not modify anything outside of its own scope. It takes a number as input, performs a calculation, and returns a new value. It doesn't change any variables outside of its own scope or have any other side effects.

//Another example of a pure function is the slice() method for arrays:


const arr = [1, 2, 3, 4];

const slicedArr = arr.slice(0, 2);

console.log(slicedArr); // Output: [1, 2]

console.log(arr); // Output: [1, 2, 3, 4]


//The slice() method returns a new array containing a portion of the original array, but it does not modify the original array. It takes two arguments, the start index and the end index of the portion of the array to be sliced, and returns a new array containing the elements in that range.


//Impure Functions


//An impure function is a function that does not always return the same output given the same input, and/or has side effects. In other words, it modifies something outside of its own scope, or depends on something outside of its own scope.


//Here is an example of an impure function:

let counter = 0;

function increment() {
  counter++;
  return counter;
}


// The increment function is impure because it modifies the counter variable outside of its own scope. Every time it is called, it increases the value of counter by 1 and returns the new value.


//Another example of an impure function is the Math.random() method:

function getRandomNumber() {
    return Math.random();
  }

  //The getRandomNumber function is impure because it does not always return the same output given the same input. It generates a random number between 0 and 1 every time it is called, so the output is unpredictable and not deterministic.


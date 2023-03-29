//Array.join() is a method in JavaScript that concatenates all elements of an array into a single string. It does not change the original array; instead, it returns a new string
//The syntax for using Array.join() is as follows:

array.join(separator)

//The separator parameter is optional and specifies the string to be used as a separator between each element of the array in the resulting string. If separator is not specified, the default separator is a comma (",").


//Here is an example usage of Array.join():

const fruits = ['apple', 'banana', 'orange'];
const joinedString = fruits.join(', ');
console.log(joinedString); // Output: "apple, banana, orange"


//In this example, fruits.join(', ') returns a string where each element of the fruits array is separated by a comma followed by a space. The resulting string is then assigned to the joinedString variable, and the console outputs the value of joinedString.
//Note that Array.join() can also be used with an empty separator to concatenate all elements of an array without any separator between them:

const numbers = [1, 2, 3, 4];
const joinedNumbers = numbers.join('');
console.log(joinedNumbers); // Output: "1234"

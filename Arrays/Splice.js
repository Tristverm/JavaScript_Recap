//The Array.splice() method is a built-in method in JavaScript that allows you to modify an array by adding, removing, or replacing elements. This method has a wide range of applications, including reordering elements, removing duplicates, and more.
//The splice() method can be used to remove or add elements to an array. It can accept three or more parameters:
// it returns removed elements in an Array
array.splice(startIndex, deleteCount, item1, item2, ...)



//startIndex: The index where the change should begin. This is the index of the first element to be removed or replaced, or the index where new elements should be added. If startIndex is negative, it specifies an offset from the end of the array.

//deleteCount: The number of elements to remove from the array starting at startIndex. If deleteCount is 0, no elements are removed. If deleteCount is greater than the number of elements from startIndex to the end of the array, all elements from startIndex to the end of the array will be removed.


//item1, item2, ...: Elements to be added to the array starting at startIndex. If no elements are specified, splice() will only remove elements from the array.



///Let's look at some examples of how the splice() method can be used:


//Removing elements

const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // remove 1 element starting from index 2
console.log(arr); // Output: [1, 2, 4, 5]

// /Adding elements
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 'apple', 'banana'); // insert 'apple' and 'banana' starting from index 2
console.log(arr); // Output: [1, 2, 'apple', 'banana', 3, 4, 5]

//Replacing elements
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 'apple', 'banana'); // remove 2 elements starting from index 2 and insert 'apple' and 'banana'
console.log(arr); // Output: [1, 2, 'apple', 'banana', 5]


//Negative startIndex

const arr = [1, 2, 3, 4, 5];
arr.splice(-2, 1); // remove 1 element starting from the second to last element
console.log(arr); // Output: [1, 2, 3, 5]

//The slice() method is a built-in method in JavaScript that allows you to create a new array containing a portion of an existing array, without modifying the original array. This method can be used to extract a range of elements from an array, or to create a copy of an array.


//The slice() method takes two parameters:

array.slice(startIndex, endIndex)

// /startIndex: The index where the slice should begin. This is the index of the first element to be included in the new array.
//endIndex: The index where the slice should end. This is the index of the first element that should be excluded from the new array. If endIndex is not specified, all elements from startIndex to the end of the array will be included in the new array.


//The slice() method returns a new array containing the selected elements.


//Extracting a range of elements
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(1, 4); // extract elements from index 1 to 3
console.log(newArr); // Output: [2, 3, 4]

//Creating a copy of an array
const arr = [1, 2, 3, 4, 5];
const copyArr = arr.slice(); // create a copy of the original array
console.log(copyArr); // Output: [1, 2, 3, 4, 5]

//Extracting elements from the end of an array
const arr = [1, 2, 3, 4, 5];
const lastThree = arr.slice(-3); // extract the last three elements of the array
console.log(lastThree); // Output: [3, 4, 5]

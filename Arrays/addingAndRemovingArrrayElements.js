//Array.Push()

//In JavaScript, Array.push() is a method that allows you to add one or more elements to the end of an array. The syntax for using Array.push() is as follows:
array.push(element1, element2, ..., elementN);

//Here, array is the name of the array that you want to add elements to, and element1, element2, ..., elementN are the elements that you want to add. You can add as many elements as you want by separating them with commas.

//The push() method modifies the original array and returns the new length of the array after the elements have been added. For example:

let numbers = [1, 2, 3, 4];
let length = numbers.push(5, 6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
console.log(length); // Output: 6

// In this example, we first create an array numbers with four elements. We then use the push() method to add two more elements, 5 and 6, to the end of the array. The push() method returns the new length of the array, which is 6. Finally, we log the new array to the console to verify that the elements were added correctly.


//Array.unshift() 

//In JavaScript, Array.unshift() is a method that allows you to add one or more elements to the beginning of an array. The syntax for using Array.unshift() is as follows:

array.unshift(element1, element2, ..., elementN);



//Here, array is the name of the array that you want to add elements to, and element1, element2, ..., elementN are the elements that you want to add. You can add as many elements as you want by separating them with commas.

//The unshift() method modifies the original array and returns the new length of the array after the elements have been added. For example:


let numbers = [3, 4, 5];
let length = numbers.unshift(1, 2);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(length); // Output: 5

// In this example, we first create an array numbers with three elements. We then use the unshift() method to add two more elements, 1 and 2, to the beginning of the array. The unshift() method returns the new length of the array, which is 5. Finally, we log the new array to the console to verify that the elements were added correctly.


// --------------------------------Removing Array Elements -------------------

// Array.pop()

//In JavaScript, Array.pop() is a method that allows you to remove the last element from an array. The syntax for using Array.pop() is as follows:

array.pop();

//Here, array is the name of the array that you want to remove the last element from.

//The pop() method modifies the original array and returns the value of the removed element. For example:

let numbers = [1, 2, 3, 4, 5];
let lastElement = numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4]
console.log(lastElement); // Output: 5


//In this example, we first create an array numbers with five elements. We then use the pop() method to remove the last element, which is 5. The pop() method returns the value of the removed element, which is 5. Finally, we log the new array to the console to verify that the last element was removed, and we log the value of the removed element to the console as well.


//Array.shift()

//In JavaScript, Array.shift() is a method that allows you to remove the first element from an array. The syntax for using Array.shift() is as follows:


array.shift();


//Here, array is the name of the array that you want to remove the first element from.


//The shift() method modifies the original array and returns the value of the removed element. For example:

let numbers = [1, 2, 3, 4, 5];
let firstElement = numbers.shift();
console.log(numbers); // Output: [2, 3, 4, 5]
console.log(firstElement); // Output: 1


//In this example, we first create an array numbers with five elements. We then use the shift() method to remove the first element, which is 1. The shift() method returns the value of the removed element, which is 1. Finally, we log the new array to the console to verify that the first element was removed, and we log the value of the removed element to the console as well.
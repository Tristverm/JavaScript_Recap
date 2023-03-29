//The split() method is a built-in function in JavaScript that allows you to split a string into an array of substrings based on a specified separator. 
//The syntax for the split() method is as follows:
string.split(separator, limit)

//Here, string is the string that you want to split, separator is the character, or regular expression, that separates the string into substrings, and limit is an optional parameter that specifies the maximum number of splits to be performed.

//For example, if you have the following string:
let str = "Hello, world!";
let str = "Hello, world!";


//You can split it into an array of substrings using the split() method:

//You can also use a regular expression as a separator. For example:
let str = "apple,banana,orange";
let arr = str.split(/,/); // ["apple", "banana", "orange"]


//in this example, the regular expression /,/ matches a comma character, which is used as the separator to split the string into an array of substrings.

//Note that the split() method does not change the original string; it returns a new array of substrings instead.


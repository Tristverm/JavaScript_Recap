// In JavaScript, an if statement is a control statement that allows you to execute a block of code conditionally. The if statement evaluates a specified condition, and if the condition is true, the block of code inside the if statement is executed. If the condition is false, the block of code inside the if statement is skipped.

// Here's the basic syntax of an if statement in JavaScript:
if (condition) {
  // code to execute if condition is true
}
//   In this syntax, condition is an expression that is evaluated to either true or false. If the condition is true, the code inside the curly braces will be executed. If the condition is false, the code inside the curly braces will be skipped.

// Here's an example:

let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not yet an adult.");
}

// In this example, the if statement checks whether age is greater than or equal to 18. Since age is 18, the condition is true, and the code inside the first set of curly braces is executed. The output of this code would be: "You are an adult."



//JavaScript if-else statement is a conditional statement used to execute different blocks of code based on whether a particular condition is true or false. The syntax of the if-else statement is as follows:

if (condition) {
    // execute this block of code if the condition is true
  } else {
    // execute this block of code if the condition is false
  }
 //Here, the "condition" is an expression that is evaluated to either true or false. If the condition is true, then the code inside the first block of curly braces is executed, otherwise, the code inside the second block of curly braces is executed. 


 //Here is an example of using an if-else statement in JavaScript:

 let age = 25;
 if (age >= 18) {
   console.log("You are eligible to vote.");
 } else {
   console.log("You are not eligible to vote yet.");
 }

 //In this example, if the age variable is greater than or equal to 18, then the message "You are eligible to vote." will be displayed. Otherwise, the message "You are not eligible to vote yet." will be displayed.

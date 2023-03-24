//In JavaScript, a switch statement is a control flow structure that allows a programmer to execute different code blocks based on the value of an expression. The switch statement evaluates an expression and then executes the code associated with the matching case. If there is no matching case, then the code associated with the default case is executed.
//The syntax of a switch statement in JavaScript is as follows:

switch (expression) {
    case value1:
      // code block for value1
      break;
    case value2:
      // code block for value2
      break;
    case value3:
      // code block for value3
      break;
    default:
      // code block for all other cases
  }

  //The expression is the value that is being evaluated. The case values are the possible values that the expression could have. The break keyword is used to end the execution of the code block associated with the matching case. The default keyword is used to specify the code block that should be executed if no matching case is found.

//Here is an example of a switch statement in JavaScript:

let day = new Date().getDay();
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Unknown";
}

console.log("Today is " + dayName);


//In this example, the switch statement is used to determine the day of the week based on the value returned by the getDay() method. The code block associated with the matching case is executed, and the dayName variable is assigned the name of the day. If there is no matching case, the default case is executed and dayName is set to "Unknown". The output of the above code will be "Today is Wednesday" if run on a Wednesday.

  

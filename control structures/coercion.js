//In JavaScript, coercion is the process of converting a value from one type to another type. Coercion can occur implicitly, where JavaScript automatically converts the type of a value, or explicitly, where the developer manually converts the type of a value.

// In the context of coercion, truthy and falsy values refer to values that are treated as true or false, respectively, when coerced to a boolean type.

//Here are some examples of falsy values in JavaScript:
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean('')); // false


//In contrast, here are some examples of truthy values in JavaScript:

console.log(Boolean('hello')); // true
console.log(Boolean(1)); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function(){})); // true


//In some cases, JavaScript may implicitly coerce a value to a boolean type, such as when using an if statement or the logical operators. For example:

var x = undefined;

if (x) {
  console.log('x is truthy');
} else {
  console.log('x is falsy');
}
// Output: 'x is falsy'


//In the example above, the value of x is coerced to a boolean type when evaluated in the if statement. Since undefined is a falsy value, the else block is executed.
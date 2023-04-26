//There are two types of JS modules: ES6 (ECMAScript 2015) modules and CommonJS modules. ES6 modules are the newer and preferred standard, but CommonJS modules are still widely used in legacy code and in Node.js environments.

//CommonJS Modules:

//CommonJS modules use the require() and module.exports functions to define and use modules. For example, suppose we have a file math.js with a function that multiplies two numbers:

// math.js
module.exports.multiply = function(a, b) {
    return a * b;
  };

  
//We can then import this function in another file, say index.js, using the require() function:

// index.js
const math = require('./math.js');

console.log(math.multiply(2, 3)); // prints 6


//In this example, we use the require() function to load the math.js module into a variable math. We can then access the multiply function using the dot notation.

//Note that CommonJS modules are synchronous, which means that they are loaded and executed sequentially in the order they are required. This can cause performance issues in large projects with many dependencies.

// math.js
module.exports.multiply = function(a, b) {
    return a * b;
  };

  

 //We can then import this function in another file, say index.js, using the require() function:

// index.js
const math = require('./math.js');

console.log(math.multiply(2, 3)); // prints 6


//In this example, we use the require() function to load the math.js module into a variable math. We can then access the multiply function using the dot notation.

//Note that CommonJS modules are synchronous, which means that they are loaded and executed sequentially in the order they are required. This can cause performance issues in large projects with many dependencies.


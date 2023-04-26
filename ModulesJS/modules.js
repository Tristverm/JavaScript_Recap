//JavaScript (JS) modules are self-contained units of code that encapsulate related functionality and can be reused across different parts of a program or even across different projects. They help to organize code and make it easier to maintain, debug, and scale.

//There are two types of JS modules: ES6 (ECMAScript 2015) modules and CommonJS modules. ES6 modules are the newer and preferred standard, but CommonJS modules are still widely used in legacy code and in Node.js environments.

//ES6 Modules:
//ES6 modules use the import and export statements to define and use modules. For example, suppose we have a file math.js with a function that adds two numbers:

// math.js
export function add(a, b) {
    return a + b;
  }
  

//We can then import this function in another file, say index.js, using the import statement:

// index.js
import { add } from './math.js';

console.log(add(2, 3)); // prints 5

//In this example, we import the add function from math.js using curly braces and specify the relative path to the module file with the ./ prefix. We can then use the add function as if it were defined in index.js.


//ES6 modules are the newer and preferred standard for defining and using modules in JavaScript. They provide a cleaner syntax and better support for asynchronous loading of modules. In this answer, I'll explain ES6 modules in more detail and provide some examples.

            //Defining ES6 Modules:
//ES6 modules use the export keyword to define a public interface for the module. For example, let's say we have a module called math.js that exports a function add:

// math.js
export function add(a, b) {
    return a + b;
  }
  

  //In this example, the add function is defined within the module and exported using the export keyword.

//ES6 modules use the import keyword to load and use other modules. For example, let's say we have another module called app.js that uses the add function from math.js:

// app.js
import { add as sum } from './math.js';

console.log(sum(2, 3)); // prints 5



//In this example, we use the import keyword to load the add function from the math.js module. We specify the relative path to the module file using the ./ prefix.


//Importing Everything from a Module:

//Sometimes, we may want to import everything from a module instead of just a specific function. We can do this using the * as syntax. For example, let's say we have a module called utils.js that exports multiple functions:

// utils.js
export function formatName(name) {
    return name.toUpperCase();
  }
  
  export function formatDate(date) {
    return new Intl.DateTimeFormat('en-US').format(date);
  }


//We can import all the functions from utils.js into another module using the * as syntax:
// app.js
import * as utils from './utils.js';

console.log(utils.formatName('john doe')); // prints JOHN DOE
console.log(utils.formatDate(new Date())); // prints the current date in the format MM/DD/YYYY

  


//In this example, we use the * as syntax to import all the functions from utils.js into a variable called utils. We can then access the functions using the dot notation.

//Default Exports:
//ES6 modules also support default exports, which allow us to export a single value or object as the default export of a module. For example, let's say we have a module called config.js that exports a configuration object as the default export:

// config.js
export default {
    apiUrl: 'https://example.com/api',
    apiKey: 'my-api-key'
  }


 // We can then import the default export of config.js into another module using the import keyword followed by a name of our choice:


// app.js
import config from './config.js';

console.log(config.apiUrl); // prints https://example.com/api
console.log(config.apiKey); // prints my-api-key

//In this example, we import the default export of config.js into a variable called config. We can then access the properties of the configuration object using the dot notation.



//Dynamic Imports:

//ES6 modules also support dynamic imports, which allow us to load modules asynchronously at runtime. For example, let's say we have a button on a webpage that loads a module when clicked:


// app.js
document.getElementById('button').addEventListener('click', async function() {
    const { default: module } = await import('./dynamic.js');
    module.doSomething();
  });
  

  //In this example, we use the import() function to load the dynamic.js module asynchronously





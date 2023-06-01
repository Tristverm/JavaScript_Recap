//Topic 2: Cookies

In this topic, you'll delve into cookies, a common method of storing data in the browser. You'll explore how cookies are created, read, and manipulated using JavaScript, and learn about the different attributes of cookies, such as name, value, expiration, and domain. You'll also become aware of the limitations of cookies, such as size restrictions and security concerns.

1. What are Cookies?
   - Cookies are small text files stored on a user's browser by websites they visit.
   - They are primarily used for maintaining user sessions, personalization, and tracking user behavior.

2. Creating a Cookie:
   - Cookies can be created using the `document.cookie` property in JavaScript.
   - Example:
     ```javascript
     document.cookie = "username=John Doe";
     ```

3. Reading a Cookie:
   - You can access the cookie data using the `document.cookie` property.
   - Example:
     ```javascript
     console.log(document.cookie);
     ```

4. Manipulating a Cookie:
   - To update a cookie, you need to set a new value for the cookie.
   - Example:
    //  ```javascript
     document.cookie = "username=Jane Doe";
     ```

5. Cookie Attributes:
   - Cookies can have various attributes that control their behavior.
   - Name-Value Pair: Cookies consist of a name-value pair.
   - Example:
    //  ```javascript
     document.cookie = "username=John Doe";
     ```
   - Expiration: Cookies can have an expiration date to control their lifespan.
   - Example:
    //  ```javascript
     document.cookie = "username=John Doe; expires=Fri, 31 Dec 2023 23:59:59 GMT";
     ```
   - Domain: Cookies can be restricted to a specific domain.
   - Example:
    //  ```javascript
     document.cookie = "username=John Doe; domain=example.com";
     ```
   - Path: Cookies can be restricted to a specific path within a domain.
   - Example:
    //  ```javascript
     document.cookie = "username=John Doe; path=/products";
     ```
   - Secure: Cookies marked as secure will only be sent over HTTPS.
   - Example:
    //  ```javascript
     document.cookie = "username=John Doe; secure";
     ```

//6. Reading and Parsing Multiple Cookies:
   - The `document.cookie` property returns all the cookies as a single string.
   - To extract specific cookie values, you need to parse the string.
   - Example:
    //  ```javascript
     function getCookieValue(cookieName) {
       const cookies = document.cookie.split("; ");
       for (const cookie of cookies) {
         const [name, value] = cookie.split("=");
         if (name === cookieName) {
           return value;
         }
       }
       return null;
     }
     
     const username = getCookieValue("username");
     console.log(username);
     ```

//7. Deleting a Cookie:
   - To delete a cookie, you can set its expiration date to the past.
   - Example:
    // javascript
     document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
     ```

//8. Limitations and Security Concerns:
   - Size Limit: Cookies have a size limit of approximately 4KB.
   - Security Concerns: Cookies can be susceptible to security vulnerabilities like cross-site scripting (XSS) attacks and cross-site request forgery (CSRF).
   - Sensitivity of Data: Avoid storing sensitive information in cookies as they are stored in plain text and can be accessed by the client.
   - Best Practices: Use secure cookies for sensitive information, set appropriate expiration dates, and sanitize cookie

 data.

Understanding cookies is crucial as they are widely used for session management and personalization in web applications. However, it's important to consider their limitations and follow security best practices when working with cookies.


Here's an example that demonstrates how to store multiple cookies using JavaScript:

```javascript
// Function to set multiple cookies
function setMultipleCookies(cookies) {
  cookies.forEach((cookie) => {
    document.cookie = `${cookie.name}=${cookie.value}; expires=${cookie.expires}; path=${cookie.path}`;
  });
}

// Example usage
const cookiesToSet = [
  {
    name: "username",
    value: "JohnDoe",
    expires: "Fri, 31 Dec 2023 23:59:59 GMT",
    path: "/"
  },
  {
    name: "language",
    value: "en",
    expires: "Fri, 31 Dec 2023 23:59:59 GMT",
    path: "/"
  },
  {
    name: "theme",
    value: "dark",
    expires: "Fri, 31 Dec 2023 23:59:59 GMT",
    path: "/"
  }
];

setMultipleCookies(cookiesToSet);
```

In this example, the `setMultipleCookies` function accepts an array of cookie objects. Each cookie object contains properties like `name`, `value`, `expires`, and `path`. The function iterates over the array and sets each cookie using the `document.cookie` property, concatenating the cookie attributes.

By calling the `setMultipleCookies` function with an array of cookies to set, you can store multiple cookies in the user's browser. In this case, we're setting three cookies: `username`, `language`, and `theme`, each with their respective values, expiration dates, and paths.

Remember to adjust the values of the cookies according to your specific use case and requirements.
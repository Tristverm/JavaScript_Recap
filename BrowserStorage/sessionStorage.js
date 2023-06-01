//Topic 4: Session Storage

//In this topic, we'll explore session storage, another type of client-side storage mechanism available in modern web browsers. We'll understand the concept of session storage, learn how to use the sessionStorage object in JavaScript to store and retrieve data, and compare session storage with other storage options. Additionally, we'll discuss the scope and limitations of session storage.

//1. Introduction to Session Storage:
//- Session storage is a client//-side storage mechanism similar to local storage, but with a limited lifespan.
//- It provides a way to store data as key//-value pairs specific to a user's session.

//2. Storing Data in Session Storage:
//- The `sessionStorage` object in JavaScript allows you to store data in session storage.
//- Example:

sessionStorage.setItem("username", "John Doe");

//3. Retrieving Data from Session Storage:
//- You can retrieve data from session storage using the `sessionStorage.getItem()` method.
//- Example:

const username = sessionStorage.getItem("username");
console.log(username);

//4. Updating Data in Session Storage:
//- To update data in session storage, you can simply set a new value for the corresponding key.
//- Example:

sessionStorage.setItem("username", "Jane Doe");

//5. Removing Data from Session Storage:
//- To remove data from session storage, you can use the `sessionStorage.removeItem()` method.
//- Example:

sessionStorage.removeItem("username");

//6. Clearing Session Storage:
//- The `sessionStorage.clear()` method allows you to remove all data stored in session storage.
//- Example:

sessionStorage.clear();

//7. Scope and Lifespan of Session Storage:
//- Session storage is specific to a user's session and remains accessible across multiple pages within that session.
//- The data stored in session storage is cleared when the browser window or tab is closed.

//8. Differences between Session Storage and Other Storage Options:
//- Session storage vs. Local storage:
//- Session storage is cleared when the browser is closed, while local storage data persists.
//- Session storage is specific to a single session, while local storage is accessible across different sessions.
//- Session storage vs. Cookies:
//- Session storage provides a larger storage capacity than cookies.
//- Session storage data is not sent with every HTTP request, unlike cookies.
//- Session storage is more suitable for storing temporary session//-related data, while cookies are commonly used for maintaining session state and personalization.

//9. Serialization of Complex Data:
//- Similar to local storage, session storage can only store strings.
//- Complex data structures need to be serialized before storing and deserialized when retrieved.
// Example:

const user = { name: "John Doe", age: 25 };
sessionStorage.setItem("user", JSON.stringify(user));
const retrievedUser = JSON.parse(sessionStorage.getItem("user"));

//Understanding session storage and its usage allows developers to store and retrieve temporary session-specific data in the browser. It is particularly useful for maintaining state during a user's session without persisting the data beyond that session.

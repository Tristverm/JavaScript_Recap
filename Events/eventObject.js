//In JavaScript, an event object is a JavaScript object that contains information about an event that has occurred in the web page or application. The event object is passed as an argument to an event handler function when an event is triggered, and it provides information about the event, such as its type, target, and any data associated with it.

//The event object in JavaScript typically has the following properties:

//type: A string that represents the type of the event that has occurred, such as "click", "submit", "keydown", "load", etc.

//target: A reference to the object that triggered the event. This is typically a DOM element, such as a button, form element, or link.

//currentTarget: A reference to the object that is currently handling the event. This may be different from the target property if the event is being handled by a parent element, or if the event has been propagated through multiple elements.

//timeStamp: The time at which the event occurred, in milliseconds since the Unix epoch.

//preventDefault(): A method that can be called on the event object to prevent the default behavior of the event from occurring. For example, calling preventDefault() on a "submit" event will prevent the form from being submitted.

//stopPropagation(): A method that can be called on the event object to stop the event from propagating further up the DOM tree. This can be used to prevent parent elements from handling the same event.

//keyCode: For keyboard events, this property represents the key code of the key that was pressed.

//shiftKey, ctrlKey, altKey: For keyboard events, these properties indicate whether the shift, control, or alt keys were pressed when the event occurred.


//In addition to these standard properties, the event object may also have additional properties or methods depending on the type of event that has occurred. For example, a "mousemove" event may have properties that represent the mouse's position, while a "submit" event may have properties that represent the data that was submitted in the form.


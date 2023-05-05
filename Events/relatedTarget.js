//The relatedTarget property is another property of the event object in JavaScript. It is used to refer to the secondary target of an event, such as when a mouseout event occurs.

//The value of the relatedTarget property depends on the type of event that occurred. For example, when a mouseover event occurs, the relatedTarget property refers to the element that the mouse came from (i.e., the previous element that the mouse was over). Conversely, when a mouseout event occurs, the relatedTarget property refers to the element that the mouse is moving to (i.e., the next element that the mouse will be over).

var link = document.getElementById("myLink");
link.addEventListener("mouseout", function (event) {
  console.log("Mouseout event occurred");
  console.log("Event target:", event.target);
  console.log("Related target:", event.relatedTarget);
});

//In this code, we add a mouseout event listener to a link element with an ID of "myLink". When the mouse moves out of the link, the event listener function is called with an event object as its argument. Within the function, we log a message to the console indicating that the mouseout event occurred, as well as the target and relatedTarget properties of the event object.

//Assuming that the mouse is moving from the link to another element, the target property will refer to the link element, and the relatedTarget property will refer to the element that the mouse is moving to.

//It's worth noting that the relatedTarget property is not always available, and will be null in some cases (such as when a mouseover event occurs without a previous element).

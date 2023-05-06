//event.target and event.currentTarget are both properties of the Event object in JavaScript that are used to access information about the element that triggered the event. However, they differ in their behavior and what they represent.

//event.target represents the element that originally triggered the event. It returns the deepest element within the DOM (Document Object Model) hierarchy that was clicked. For example, if you have a div element with a p element inside it, and you click on the p element, the event.target will return the p element, which is the element that was clicked.


//Here is an example of how event.target works:

<div id="parent">
  <p id="child">Click me</p>
</div>

const parent = document.querySelector('#parent');
parent.addEventListener('click', function(event) {
  console.log(event.target); // Logs the <p> element
});

//In this example, when the user clicks on the p element, the event is triggered and the event.target property returns the p element.

//On the other hand, event.currentTarget represents the element that the event listener was attached to. It always returns the same element, no matter where the event originated from within that element or its descendants. For example, if you have a div element with a p element inside it, and you click on the p element, the event.currentTarget will return the div element, which is the element that the event listener was attached to.

//Here is an example of how event.currentTarget works:


<div id="parent">
  <p id="child">Click me</p>
</div>
const parent = document.querySelector('#parent');
parent.addEventListener('click', function(event) {
  console.log(event.currentTarget); // Logs the <div> element
});

//In this example, when the user clicks on the p element, the event is triggered and the event.currentTarget property returns the div element, which is the element that the event listener was attached to.

//In summary, event.target refers to the element that originally triggered the event, while event.currentTarget refers to the element that the event listener was attached to.





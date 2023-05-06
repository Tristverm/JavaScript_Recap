//event.stopImmediatePropagation() is a method in JavaScript that prevents further propagation of the current event in the capturing and bubbling phases. When an event occurs on an element, it can trigger events on that element's ancestors or descendants. This propagation of events is known as event bubbling.
//By calling event.stopImmediatePropagation(), you prevent any other event listeners on the same element from receiving the event, and also prevent any event listeners on the parent or ancestor elements from receiving the event. Essentially, it stops the propagation of the event immediately, before it can reach any other elements.

//Here's an example of how to use event.stopImmediatePropagation():

document.getElementById('myButton').addEventListener('click', function(event) {
    event.stopImmediatePropagation();
    console.log('Button clicked');
  });
  
  document.getElementById('myDiv').addEventListener('click', function(event) {
    console.log('Div clicked');
  });
  
  
  //In this example, clicking on the button with the ID myButton would trigger the click event listener on that button, but would not trigger the click event listener on the div with the ID myDiv. The event propagation is stopped immediately after the button is clicked, so the event does not reach the div element.





//In web development, events are actions or occurrences that happen in the browser, such as a click, hover, or scroll. Event handling is the process of capturing these events and responding to them with JavaScript code. In this context, capturing and bubbling refer to the order in which events are handled by elements in the HTML document tree.

//Capturing is the process of registerng an event starting from the outermost element, and then moving inward towards the target element. In capturing, the event starts at the highest level of the document tree and works its way down to the target element. This is useful for handling events that need to be intercepted or prevented from propagating further down the tree. The capturing phase is rarely used in practice, as it is more common to handle events during the bubbling phase.

//Bubbling is the process of handling an event starting from the target element, and then moving outward towards the outermost element. In bubbling, the event starts at the target element and then moves up the document tree, triggering event handlers on each parent element until it reaches the outermost element. This is the default behavior for event propagation, and it is the most commonly used phase for handling events.

//Here's an example of how event bubbling works:

<div id="outer">
  <div id="inner">
    <button id="btn">Click me!</button>
  </div>
</div>;

document.getElementById("btn").addEventListener("click", function (event) {
  console.log("Button clicked!");
  event.stopPropagation();
});

document.getElementById("inner").addEventListener("click", function () {
  console.log("Inner div clicked!");
});

document.getElementById("outer").addEventListener("click", function () {
  console.log("Outer div clicked!");
});

//When the button is clicked, the click event is triggered on the button element first. The event then "bubbles" up the document tree, triggering the click event handlers on the inner div and then the outer div. The output of the console.log statements would be:

//   Button clicked!
//   Inner div clicked!
//   Outer div clicked!

//Notice that the event handler on the button calls event.stopPropagation() which prevents the event from bubbling up any further. In this case, the event only triggers the click event handlers on the button and the inner div.

//To manipulate events, you can use various methods and properties of the event object that is passed to the event handler function.

//For example, to prevent the default behavior of an event, such as following a link when clicked, you can call event.preventDefault().

document.getElementById("myLink").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Link clicked, but default behavior prevented.");
});

//You can also get information about the event target, such as its tag name, ID, or class, by accessing the event target property:

document.addEventListener("click", function (event) {
  console.log("Target element:", event.target);
});
//This will log the element that was clicked on to the console.


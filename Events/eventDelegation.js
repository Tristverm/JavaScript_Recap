//Event delegation is a technique used in JavaScript to handle events efficiently when there are multiple elements that need to have the same event listener attached to them. Instead of attaching the event listener to each individual element, the listener is attached to a parent element and the events are delegated down to the child elements.

//The event.target property is particularly useful for event delegation, as it allows you to determine which child element actually triggered the event. By checking the event.target property, you can determine if the event occurred on a child element that you want to handle, and then take the appropriate action.

//For example, let's say you have a list of items that the user can click on to select them. Instead of attaching a click event listener to each individual item, you can attach the listener to the parent element and use event delegation to handle the events:

<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

//In this example, the event listener is attached to the ul element, and when the user clicks on an item, the event is delegated down to the child li element that was clicked. By checking the event.target property, we can determine if the event occurred on an li element, and then log the selected item to the console.

//Overall, using event.target and event delegation can help simplify your code and improve performance, especially when dealing with large numbers of elements.





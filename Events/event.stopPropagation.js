//Suppose you have a button inside a div, and you want to add a click event listener to the button that changes the text of the button, and also add a click event listener to the div that changes the text of the div. Here's what the HTML might look like:

<div id="container">
  <button id="btn">Click me!</button>
</div>


//Here's some JavaScript code that adds event listeners to the button and the div:


const container = document.getElementById('container');
const btn = document.getElementById('btn');

// Add click event listener to button
btn.addEventListener('click', function() {
  this.textContent = 'Button clicked!';
});

// Add click event listener to div
container.addEventListener('click', function() {
  this.textContent = 'Div clicked!';
});



//If you run this code and click on the button, its text will change to "Button clicked!", but then the text will immediately be changed again to "Div clicked!" by the click event listener on the div. This is because the click event bubbles up from the button to the div, and the div's event listener is triggered after the button's event listener.

//To fix this, you can add event.stopPropagation() to the button's event listener to prevent the event from bubbling up to the div:

// Add click event listener to button
btn.addEventListener('click', function(event) {
    this.textContent = 'Button clicked!';
    event.stopPropagation();
  });
  

  //Now when you click on the button, its text will change to "Button clicked!" and stay that way, because the event is no longer propagated up to the div.





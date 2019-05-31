///// CLICK EVENTS /////

// First, get a reference to the "magic" button!
// We're going to be using .querySelector() to grab elements from the DOM (our index.html). And we want to store it in a variable, so we don't have to type document.querySelector() over and over again!


// Next, add an event listener on that button.
// Let's make one that just console.logs something!
// Here we're using javascript to "listen" for a click event on our magic button.



// Here's a little example of what event listeners are for:
// Let's say you bring your car into the shop, and you need to know when it's ready.
// -The inefficient way: Come back every 15 minutes and ask if it's ready yet.
// -The better way: Leave your phone number and ask that they notify you when it's ready.

// Now let's say you have an HTML element, and you need to know when it's been clicked.
// -The inefficient way: Come back every 15 mins and ask if there's been a click.
// -The better way (and how event listeners work): Give the HTML element a function and ask that they invoke it for you when a click happens.


// What can you do in an event listner? All the same stuff you can do in a normal function!
// We're gonna grab our "make a box" button from the index.html and assign it to a variable:

// And give the functionality to it when we click on our button:


// You can also define your function outside of your event listener and pass a reference to the function into the event listener.
// Adding an event listener to our button:

// The function that creates a box:






///// SECOND HALF CHALLENGE: Text box values! /////

// Get a reference to the input box:

// Get a reference to the submit button:

// Get a reference to the textbox:


// Add an event listener to the submit button.


// Add an event listener to the textbox instead of the submit button

// Add a keyup event that changes the text in the textBox div in real time
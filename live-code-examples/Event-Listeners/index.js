///// CLICK EVENTS /////

// First, get a reference to the "magic" button!
// We're going to be using .querySelector() to grab elements from the DOM (our index.html). And we want to store it in a variable, so we don't have to type document.querySelector() over and over again!
var button = document.querySelector("#magicButton");

// Next, add an event listener on that button.
// Let's make one that just console.logs something!
// Here we're using javascript to "listen" for a click event on our magic button.
button.addEventListener("click", function(){
  console.log("YOU CLICKED THE BUTTON!");
})
// Here's a little example of what event listeners are for:
// Let's say you bring your car into the shop, and you need to know when it's ready.
// -The inefficient way: Come back every 15 minutes and ask if it's ready yet.
// -The better way: Leave your phone number and ask that they notify you when it's ready.

// Now let's say you have an HTML element, and you need to know when it's been clicked.
// -The inefficient way: Come back every 15 mins and ask if there's been a click.
// -The better way (and how event listeners work): Give the HTML element a function and ask that they invoke it for you when a click happens.


// What can you do in an event listner? All the same stuff you can do in a normal function!
// We're gonna grab our "make a box" button from the index.html and assign it to a variable:
var createBoxBtn = document.querySelector("#createBox");
console.log(createBoxBtn);

// And give the functionality to it when we click on our button!
createBoxBtn.addEventListener("click", function(){
	var newBox = document.createElement("div")
	newBox.className = "box"
	newBox.innerHTML = "This is  GIANT BLUE BOX OMG"
	var boxContainer = document.querySelector("#boxContainer");
	boxContainer.appendChild(newBox)
})

// You can also define your function outside of your event listener and pass a reference to the function into the event listener.
// Adding an event listener to our button:
createBoxBtn.addEventListener("click", addBox);

// The function that creates a box:
function addBox (){
  var newBox = document.createElement("div");
  newBox.className = "box";
  newBox.innerHTML = "This is  GIANT BLUE BOX OMG";
  var boxContainer = document.querySelector("#boxContainer");
  boxContainer.appendChild(newBox);

}


///// SECOND HALF CHALLENGE: Text box values! /////

// Get a reference to the input box:
var textInput = document.querySelector("#textInput");
// Get a reference to the submit button:
var submitButton = document.querySelector("#submitButton");
// Get a reference to the textbox:
var textbox = document.querySelector("#textbox");

// Add an event listener to the submit button.
// The callback function should print whatever text input you enter into the textBox div
submitButton.addEventListener("click", function(){
	// This is how we're getting the "value" of our input box, with .value!
  // So this actually looks like this:
  // document.querySelector(#textInput).value
  // But since we put it inside of a variable, we won't need to type that over and over again.
	var textValue = textInput.value;
  // I'm going to console.log it to make sure that I've got it
	console.log(textValue);
  // And now I'll set it to the text content of our textbox with .textContent!
	textbox.textContent = textValue;
});

// Add an event listener to the textbox instead of the submit button
// Add a keyup event that changes the text in the textBox div in real time
textInput.addEventListener("keyup", function(){
  var text = textInput.value;
  textbox.innerHTML = text;
});






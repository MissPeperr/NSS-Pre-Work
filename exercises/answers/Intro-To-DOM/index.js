// INTRODUCTORY EXERCISES

// Use document.querySelector to grab a reference to the div with an id of "name" (and store it in a variable!)

var nameDiv = document.querySelector("#name")


// Use the innerHTML property to print your name into the container div! You should see your name in the DOM.
nameDiv.innerHTML = "Madi"

// Use document.createElement to create a new div elelemt and store it in a variable
var newDiv = document.createElement("div")

// Use the innerHTML property to print your favorite food into the div you just created. You shouldn't see it in the DOM yet- that's okay!
newDiv.innerHTML = "Sushi"

// Use appendChild to append your new favorite food div to the div with an id of "name". Now you should see your favorite food in the DOM, right below the name!
nameDiv.appendChild(newDiv);

// If you finish with these exercises early, try using document.createElement to create things other than divs. Can you create an H1 tag? How about a paragraph? Try setting their innerHTML the same way!


// CHALLENGE EXERCISES

// Loop over the following array:
var muppets = ["Fozzie Bear", "Kermit the Frog", "Ms. Piggy"]

// For each item in the array, create a new <li> element and append it to the <ul> element with the id of "container"

// First, grab a reference to the list container that's already in the DOM
var listContainer = document.querySelector("#list");

// Loop over the array
for(var i=0; i< muppets.length; i++){
  // For each item in the array, create a new li item
  var newListItem = document.createElement("li");
  // Set the new li item's innerHTML to the current muppet's name
  newListItem.innerHTML = muppets[i];
  // Append the new li item to the list container
  listContainer.appendChild(newListItem)
}

// You should see a bulletted list of muppet names in the DOM!

// BONUS CHALLENGE:
// Use JavaScript to create a resume for Fozzie Bear.
var fozzie = {
  name: "Fozzie Bear",
  tagline: "Wokka wokka!",
  signatureMove: "Ear wiggle",
  hobbies: ["Hilarious jokes", "Throwing pies at people", "John Wayne impressions"],
  biggestFan: "Gonzo the Great",
  greatestCritics: ["Statler", "Waldorf"]
}


// 1. Create an <h1> element and set the innerHTML as Fozzie's name.

// First, grab a reference to our container div
var fozzieContainer = document.querySelector("#fozzie")
// Create an <h1> element
var nameHeader = document.createElement("h1");
// Set the innerHTML to fozzie's name
nameHeader.innerHTML = fozzie.name;
// Append it to the fozzieContainer
fozzieContainer.appendChild(nameHeader)

// 2. Create an <h3> element and set the innerHTML for his tagline

// Create an <h3> element
var tagline = document.createElement("h3");
// Set the innerHTML of our newly created h3 to fozzie's tagline
tagline.innerHTML = fozzie.tagline;
// Append it to the DOM
fozzieContainer.appendChild(tagline);


// 3. Create a <p> element and set the innerHTML for his signature signatureMove

// Create a <p> element
var signatureMove = document.createElement("p");
// Set the innerHTML of our newly created p to fozzie's signature move
signatureMove.innerHTML =fozzie.signatureMove;
// Append it to the DOM
fozzieContainer.appendChild(signatureMove);


// 4. Loop through fozzie's hobbies and print each one to the dom as an unordered list

// First, create a <ul> element outside the loop.
var hobbiesList = document.createElement("ul");
// **We need to create this outside the loop because we only want one <ul> element-- it's going to be our list container. We need to create the <li> elements inside the loop because we want one <li> element for each item in the array.

// We can get to the array of hobbies with dot notation, the same way we would get to Fozzie's name or tagline. Try logging the array to the console! It works, I promise!
console.log(fozzie.hobbies)
// This should look just like a normal array, which means we can loop over fozzie.hobbies just like we did with the muppets array in the first challenge!

for(var x = 0; x < fozzie.hobbies.length; x++){
  // For each item in the array, create a new li item
  var hobby = document.createElement("li");
  // Set the new li item's innerHTML to the current muppet's name
  hobby.innerHTML = fozzie.hobbies[x];
  // Append the new li item to the hobbiesList <ul> container
  hobbiesList.appendChild(hobby)
}

// Finally, now that we've appended all of our hobbies to our hobbies list, let's put our hobbies list in the DOM!
fozzieContainer.appendChild(hobbiesList)


// 5. Create a paragraph element and set the innerHTML to the sentence "Fozzie is constantly heckled by <insert greatest critics here>, but luckily his friend <insert biggest fan here> is always there to cheer him up."

// Create a <p> element
var bioParagraph = document.createElement("p");

// We need to grab Statler and Waldorf's names out of the Fozzie object. But wait! Their names are stored in an array! How do we access items out of an array? We could use a loop, and it's fine if you did, but for these purposes I just used square bracket notation to grab the first and second items out of the fozzie.greatestCritics array. Remember that arrays are zero-indexed, so fozzie.greatestCritics[0] is the first item in the array ("Statler"), and fozzie.greatestCritics[1] is the second item in the array ("Waldorf").

bioParagraph.innerHTML = "Fozzie is constantly heckled by " + fozzie.greatestCritics[0] + " and " + fozzie.greatestCritics[1] + ", but luckily his friend " + fozzie.biggestFan + " is always there to cheer him up."
fozzieContainer.appendChild(bioParagraph)

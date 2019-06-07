// HI FRIENDS!


//1. Instantiate and assign your favorite restaurant to a favoriteRestaurant variable
// A variable is like a box that holds a value so you can reuse it later. The left side is the variable name and the right side is its value.
var favoriteRestaurant = "Taco Mamacita";

//2. Instantiate and assign your favorite food at that restaurant to a favoriteFood variable
var favoriteFood = "Gringo Enchiladas";

//3. Concatenate your favorite food and favorite restaurant and print "I can't wait to eat <favoriteFood> at <favoriteRestaurant>" to the console

// We can use the plus sign (+) to add strings together. In this case, we're concatenating them with the variables we created in step one and two. Then we're assigning the new string (i.e. the whole sentence) to a new variable named foodSentence.
var foodSentence = "I can't wait to eat " + favoriteFood + " at " + favoriteRestaurant;

// The console log lets us see our code in the developer tools of our browser
// **ctrl+shft+j in windows and cmd+opt+j in mac
console.log("This is the sentence from a plain old console log: ", foodSentence);

//4. Create and call a function that prints "I can't wait to eat <favoriteFood> at <favoriteRestaurant>" to the console
// A function is a reusable chunk of code. The first part is where we DECLARE the function. When you see the function name with two parentheses () after it, that's where we CALL the function (i.e. when the code runs). Nothing actually happens until you call the function.
function eatFood(){
  console.log("I can't wait to eat " + favoriteFood + " at " + favoriteRestaurant);
  // console.log("This is the sentence from a function: ", foodSentence);
}
eatFood();

//5. Create an array of five of your favorite foods.
// Arrays are a way to store pieces of information in a specific order. Arrays are organized by index! For example, you can access the first item in the array, the second item in the array, etc.
var foodArray = ["Sushi", "Tacos", "Green Beans", "Bread", "Butter"];
console.log(foodArray);

// 6. Loop through that array and print each food to the console.


/*
    This is a for loop! It will run any code between the curly brackets as many times as we tell it to. The stuff inside the parentheses tells the loop how we want it to run.
        - The first statement in the parentheses (var i = 0) tells the loop we want it to start its counter at 0. This can be any number!
        - The second statement in the parentheses (i < foodArray.length) tells the loop when we want it to stop. The loop will run as long as this condition is true and stop as soon as this condition is false. In this case, we want it to run as long as the counter (i) is less than the number of items in the foodArray array. In other words, we want it to run for each item in the food array and then stop.
        - The third statement (i++) tells us how we want our counter to count. In this case, we want our counter to increase itself by one each time. i++ is the same as saying i = i + 1. Every time the loop runs, i will increase by one.
    Cool, now what's happening inside the array?
        - First, we log our counter variable to the console so we can watch it count.
        - Next, we use our counter variable to reference values in our foodArray array. On the first pass of the loop, i is 0. We can see it becasue we console logged it, and because that was the first thing we put in those parentheses! So, foodArray[i] is the same thing as writing foodArray[0], i.e. the first item in the Array ("Sushi").
*/
for(var i = 0; i < foodArray.length; i++){
  console.log(i);
  console.log(foodArray[i]);
}

// 7. Loop through the array again, but this time check and see if the current food is "Noodles". If so, log "HECK YEAH! NOODLES!" to the console. If not, log "But have you considered noodles?" to the console.
/*
   Our old friend the foor loop! This time, every time the loop runs, we check to see if a condition is true with an if/else statement
      THE IF STATEMENT: This almost reads like English! If the expression inside the parentheses evaluates to true, the code between the first curly brackets will run. If it evaluates to false, it will drop down to the next set of curly brackets and run that code instead.
      OUR CONDITION: In this example, we want to see IF the current item we're looping over in the food array (foodArray[j]) is equal to the string "Noodles"
*/
for(var j = 0; j < foodArray.length; j++){
  if(foodArray[j] === "Noodles"){
    console.log("HECK YEAH!! NOODLES!")
  } else {
    console.log("But have you considered noodles?");
  }
}


// 8. Take a second to digest the following object:
// //Objects have KEYS and VALUES. KEYS (on the left) can have any data type as their value. This object contains strings, arrays, and another object
var theRock = {
  firstName: "Dwayne",
  nickName: "The Rock",
  lastName: "Johnson",
  favoriteFoods: ["Raw Meat", "Ambition"],
  hobbies: ["Jumping out of Planes", "Wrestling Grizzlies", "Personally Holding the San Andreas Fault Together", "Crashing Through Walls"],
  pets: {
    dog: "Hobbs",
    cat: "Calvin"
  }
}

// Now use this object to:

// 9. Print Dwayne The Rock Johnson's first name to the console.
// We can dig into the object by using dot notation! All you need is a period between the name of the object and the name of the property whose value you want to access.
console.log(theRock.firstName);
console.log(theRock.lastName);

// 10. Print Dwayne The Rock Johnson's dog's name to the console
// Dot notation even works for objects inside of objects! OBJECT-CEPTION!!
console.log(theRock.pets.dog);

// 11. Loop through Dwayne The Rock Johnson's hobbies and print each one to the console.
// OKAY, what if we have an array inside an object? How can we access that array? Dot notation again! Same as above! What should we do with that array once we get to it? A for loop!
console.log(theRock.hobbies);
for(var k = 0; k < theRock.hobbies.length; k++){
  console.log(theRock.hobbies[k]);
}

// 12. Add a property of 'motto' to The Rock's object and set it equal to a personal motto that you make up
// Our old buddy dot notation can also add key value pairs to objects!
theRock.motto = "Can you smell what the Rock is cooking?";
console.log(theRock);

// 13. Create an object that represents some fun facts about yourself, using Dwayne The Rock Johnson as an example.
var madi = {
  firstName: "Madi",
  lastName: "Peper",
  age: 23,
  eyeColor: "blue",
  favoriteColor: "light blue",
  pets: {
    dog: "Bonnie",
    cat: "Maisey"
  },
  hobbies: ["Painting", "Waiting for Kingdom Hearts 3"],
  favoriteFoods: ["Sushi", "Tacos", "Noodles"]
}


console.log(madi);


// 14. Print your full name to the console.
console.log(madi.firstName);

// 15. Print your favorite color to the console.
console.log(madi.favoriteColor);

// 16. Add a property of 'eyeColor', then log it to the console.
console.log(madi.eyeColor);

// 17. Loops over your array of hobbies, and print each one to the console.
for(var i = 0; i < madi.hobbies.length; i++){
	console.log(madi.hobbies[i]);
}
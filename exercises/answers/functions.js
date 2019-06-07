///// FUNCTIONS /////

// 1. Declare/create a function called "add" that console.logs the result of 47 + 89
function add(){
    console.log(47 + 89);
}

// 1a. Call the "add" function ( HINT: You'll need these! -> () )
add();

// 2. Declare/create a function called "subtract" that console.logs the result of 23 - 134
function subtract(){
    console.log(23 - 134);
}
// 2a. Call the "subtract" function ( HINT: () )
subtract();

// 3. Declare/create a function called "addMore" that takes two arguments: "num1" and "num2"
        // This function should console.log the result of num1 + num2
function addMore(num1, num2){
    console.log(num1 + num2)
}
// 3a. Call the "addMore" function and pass in 2 numbers
addMore(43, 76);
// 3b. Try calling addMore() a few more times with different numbers!
addMore(75, 23);
addMore(134, 98);
addMore(378, 1432);

// CHALLENGE //
// 4. Declare/create a function called "helloWorld" that returns the string "hello world"
function helloWorld(){
    return "Hello, world";
}
// 4a. console.log the result of helloWorld()
console.log(helloWorld());

// LET'S GET CRAZY //
var wordsArray = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

// 4. Declare/create a function that loops over the wordsArray and prints each word to the console.
function printWords(){
    for(var i = 0; i < wordsArray.length; i++){
        console.log(wordsArray[i]);
    }
}

// 4a. Call the function
printWords();
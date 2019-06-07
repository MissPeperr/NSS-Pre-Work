// 1. Create an object that describes your pet (or yourself)
const bonnieObject = {
    name: "Bonnie",
    age: 4,
    breed: "Pitbull/Mix",
    favoriteColor: "purple"
}

/*
    We can use dot notation to access properties or keys inside of an object.
    bonnieObject.name will give us the value of name inside of the bonnieObject.
*/
// 2. Log to the console your/your pets' name
console.log(bonnieObject.name);

// 3. Log to the console your/your pets' age
console.log(bonnieObject.age);

// 4. Log to the console your/your pets' favorite color
console.log(bonnieObject.favoriteColor);

// CHALLENGE //
// 5. Add a property (key-value-pair) called 'isFluffy' and assign its value to a boolean
/*
    We can create brand new properties in our object by defining them like this:
*/
bonnieObject.isFluffy = true;
/*
    When I created bonnieObject, I didn't create it with the 'isFluffy' property. But here I'm using dot notation to create it AND assign it's value to true.
    I can use a console.log to make sure it was added:
*/
// 5a. Console.log the isFluffy property
console.log(bonnieObject.isFluffy);

// 6. Add a property (key-value-pair) called 'likesCats' and assign its value to a boolean
bonnieObject.likesCats = true;

// 6a. Console.log the likesCats property
console.log(bonnieObject.likesCats);

// 7. Add a property (key-value-pair) called 'favoriteFoods' and assign its value to an array of strings of your/your pets' favorite foods
bonnieObject.favoriteFoods = ["Frozen Carrots", "Dental Bones", "Dog food"]

// 7a. Console.log the favoriteFoods property
console.log(bonnieObject.favoriteFoods);

// SUPER CHALLENGE //
// 8. Write a for loop to loop over the 'favoriteFoods' array inside of your object and print each one to the console using console.log

/*
    This is a for loop! It will run any code between the curly brackets as many times as we tell it to. The stuff inside the parentheses tells the loop how we want it to run.
        - The first statement in the parentheses (var i = 0) tells the loop we want it to start its counter at 0. This can be any number!
        - The second statement in the parentheses (i < bonnieObject.favoriteFoods.length) tells the loop when we want it to stop. The loop will run as long as this condition is true and stop as soon as this condition is false. In this case, we want it to run as long as the counter (i) is less than the number of items in the favoriteFoods array inside of the bonnieObject. In other words, we want it to run for each item in the favoriteFood array and then stop.
        - The third statement (i++) tells us how we want our counter to count. In this case, we want our counter to increase itself by one each time. i++ is the same as saying i = i + 1. Every time the loop runs, i will increase by one.
    Cool, now what's happening inside the array?
        - First, we log our counter variable to the console so we can watch it count.
        - Next, we use our counter variable to reference values in our favoriteFoods array. On the first pass of the loop, i is 0. We can see it becasue we console logged it, and because that was the first thing we put in those parentheses! So, bonnieObject.favoriteFoods[i] is the same thing as writing bonnieObject.favoriteFoods[0], i.e. the first item in the Array ("Frozen Carrots").
*/
for(var i = 0; i < bonnieObject.favoriteFoods.length; i++){
    console.log(i)
    console.log(bonnieObject.favoriteFoods[i]);
}
///// ARRAYS /////

//// What are they? ////
// Arrays are collections of data stored in order. You can put anything you want inside an array.
// Create an array with a bunch of different data types!



//// How do I access the data inside of the array? ////
// We'll access items in an array by their index, or their place in line. Arrays are zero-indexed, which means we start counting at 0 instead of 1.

var gradesArray = [97, 55, 62, 82, 79, 91, 74, 86];

// Let's access the first, fifth, and last grades using square bracket notation:


// You can find out how many items are in an array with the .length property. (We won't use this very much right now, but it'll come in very handy later when we cover loops.)


//// Can we add more data into an array? ////
// We can add items to an array with the .push() method.
// Add a grade to the gradesArray:


// You can also add a grade (or replace one that's already in there) by accessing its index:


// We can add, remove, or replace items with the .splice() method. This one's a bit more complicated, but it's very powerful.

var months = ['Jan', 'March', 'April', 'June'];

// Inserts 'Feb' at an index of 1 and removes 0 elements
months.splice(1, 0, 'Feb');

// Inserts 'May' at an index of 4 and removes one item (i.e. replaces 'June')
months.splice(4, 1, 'May');
console.clear();
// This is a single-line comment.
/* This is a
   multi-line
   comment */
var name = "John"; // set a string variable:
console.log(name.length); // access a property
// explain the general concepts behind object-oriented programming
console.log(name.toUpperCase()); // access a method
var friends = 5; // set a number variable
friends = friends + 1; // add numbers
friends++; // shorthand for adding one
if (friends === 10) { // checking equality
    console.log("You have ten friends");
}
// explain the difference between == and === (short version, if necessary)
var friendsArray = ["Whitney", "Omar", "Sarah"]; // set an array
console.log("I have " + friendsArray.length + " friends."); // access array length
console.log("My best friends is " + friendsArray[0]); // access array index (starting at 0))
// create a function
function average(a, b) {
    var total = a + b;
    var result = total / 2;
    return result;
};
console.log(average(4, 10));

function friendStats(friends) {
    console.log("My best friend is" + friends[0]);
    console.log("I have " + friends.length + " friends.");
}
// explain the concept of variable scope, why `friends` can be different in the function
friendStats(friends);
friendStats(["John", "Keshan"]);

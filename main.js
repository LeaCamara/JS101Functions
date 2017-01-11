console.log("hello js functions");

var myFunction = function() {  // function expression
  var blah = "myFunction ran away with the spoon";
  return blah;
}

function myOtherFunction() {  // function declaration
  return blah;
}

// both of these are OK ways to write a function

// A function doesn't do anything UNTIL it is called

function returnNothing() {
  var blah = "I don't return anything!!";
}

console.log("myFunction", myFunction());
// this CALLS the function called myFunction
console.log("returnNothing", returnNothing);
// nothing to return so it's undefined

function addStuff() {
  var sum = 2 + 2;
  return sum;
}

var result = addStuff();
console.log("result", result);

// function add(one, two) {
//   return one + two;
// }

function add(bread, butter) { // variables can be called whatever
  return bread + butter;
}

var newVal = add(3,12);
console.log("newVal", newVal);

var twoStrings = add("one","two");
console.log("twoStrings", twoStrings);

function subtract (one, two) {
  return one - two;
}

// we can take one of these functions and pass it in as an argument in another function

function performAction(num1, num2, action) {
  var meDone = action(num1, num2);
  return meDone;
}

var addValues = performAction(2, 3, add);
console.log("addValues", addValues);

// AKA a LAMBDA (an anonymous function that doesn't get named)
// but is usually used as a value passed to another function
// in order to pass a behavior as a value.
// "action" is the LAMBDA b/c w/ the () you're saying it's going to be a function.

// Scope = context in which a variable can be accessed (in function or global).
// Each function acts like its own individual universe
// and the variables that are created within that universe don't interact
// with the variables created in another universe or another function.

// ALWAYS use the VAR keyword when creating a variable inside a function.
// If you don’t, your function is reaching out to the global scope
// and might override another variable with the same name.
// // As long as you use the var keyword to create the variable,
// you can use the same variable inside functions,
// and the variable will only exist inside that function.
// GLOBAL SCOPE = when a variable is accessible anywhere inside a program

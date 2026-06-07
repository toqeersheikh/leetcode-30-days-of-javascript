// ? Closures :

// ! A mystical feature of JavaScript language

// Before learning about closures you need to know:
// Call Stack
// Execution context / Stack Frame / Activation Record
// Scope Chain

// ! Closures bring all of these concepts together in a beautiful and magical way

// ! And we don't create closures manually like we can create a new array or new function

// ! Closures simply happens automatically in certain situations

// We just need to recognize those situations

// Let see!

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`Passengers: ${passengerCount}`);
  };
};

// In the Global Execution Context we only have yet: SecureBooking() So we can say:

// Global Scope: secureBooking=<f>

// AND In the call stack we only have : Global Execution Context

// And when secureBooking Function is called:

// A new execution context is put on top of call stack so in the execution stack

// ! And each execution context has a variable environment which contains all its local variables

// And in this case it only contains: passengerCount Variable

const booker = secureBooking();

// And Global Execution Context now also contains: booker=<f> with secureBooking=<f>

// At this point the secureBook has done its execution and it is wiped from the call stack
// and passengerCount was a local variable of secureBooking function
// so with the execution of secureBooking the passengerCount variable has also gone

// so let see if this function can access passengerCount
booker();
booker();
booker();

// indeed it worked

// ! What this means is that the booker() was able to increment passengerCount

// ? But how can this function access to a variable that is local to some other function and function also has done its execution
// So its execution context is no longer on the call stack but still it was able to access a variable from secureBooking()

// ! This is because of a feature of Javascript called closures

// ! So we can say that closure makes a function remember all the variables that existed at the function's birthplace essentially
// So we can imagine the secureBooking Function as the birthPlace of booker function, as booker variable hold the returned function from secureBooking , so this function was created there

// ! So in a sense: Scope Chain is actually preserved through closures
// Even when a scope has already been destroyed because it's execution context is gone
// And even the scope has already been destroyed, the variable environment somehow keep living in the engine

// ! And function arguments are also included in variable environment and arguments are basically local variables of the function

// And so this function remembers everything by the time it was created

// ! And We can also say that a function does not lose connection to variables that existed at the function's birthplace.

// Here we can see closures in [[scopes]] property
console.dir(booker);
// ! A closure is just an internal property of JavaScript

// ! We can take a look at them using console.dir()
// ! in the [[scopes]] : scopes[]
// ! And whenever you see the double [[]] that means it is an internal property of of language that we cannot access from our code

// Another Example of Closures:

// We don't even need to return a function from a function in order to experience closures

let f;

const g = function () {
  const a = 23;

  // Re-assigning f variable:
  f = function () {
    console.log(a * 2);
  };
};

// const a=23 is local variable of function g
g();
// g has done its execution and it is popped off from the call stack, means its execution context is wiped from call stack
// And obviously a was local variable to g so it has also gone
// So there is no way we can access a local variable of a function outside a function or in any other function scope
// And accessing a local variable of function when it is return is even harder and in-fact it is impossible

// But lets call function f, which is manipulating the local variable 'a' of function g

f();
console.dir(f);

// cool it is working with no error

// And F here was not even technically defined inside function g()

// F is in the global scope

// But then as we assigned it in the function g, and right there it was closed over the variable environment of g()

// And variable environment of function g includes 'a'

// So there for  F is able to access variable 'a'

// This is only possible because of closures

// =======

// Lets create another function:

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

// Quite similar to g()

// ? But what happens when we try to assign a new value to F which is already holding a function value with variable environment of g()

h();
f();

// So this proves f here is re-assigned and it is closed over the variable environment of h()

// And that's how it can access b variable too
console.dir(f);

// ! So it really is true that closure always makes sure that a function don't loose connection to the variables that were present at it's birthplace

// =============

// Timer Example:

const boardPassengers = function (n, wait) {
  // Passengers Per Group
  const perGroup = n / 3;
  // Setting a timer
  setTimeout(function () {
    console.log(`We are boarding all ${n} passengers`);
    console.log(`There are 3 groups each group with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait}  seconds`);
};

console.log(`Global Scope here 👋`);

boardPassengers(180, 10);

// In setTimeout the callback function was executed independently

// But it has access to all the variables that were in the variable environment in which it was created

// thats n and per group

// and thats clear sign of closures being created

// ! Closures have higher priority than scope chain

// ? Most formal Definition of closures:

// ! A closure is the closed over variable environment of the execution context in which a function was created even after that execution context is gone or in other words even after the function to which the execution context belongs to has returned

// ! A Closure gives a function access to all the variables of it's parent function even after that parent function has returned (the function in which it was defined )

// ! A closure makes sure that a function does never lose connection to the variables that existed at the function's birthplace

// ! It remembers the variables even after the birthplace is gone

// ! It's like a person that never lose connection to it's hometown

// ! A closure is like a backpack of function, and the function carries it around wherever the function is called and this backpack contains all the variables that were present in the environment in which the function was created

// ! Then whenever a variable can't be found in the function scope Javascript will look into function's backpack which we call closures and take the missing variable from there

// These are some of ways to define closures but they all mean the same thing

// Closures are just a feature of javascript we cannot create our own closures

// There is no way for us to explicitly create closures they just happens automatically

// A closure is not a tangible javascript object

// So we cannot just reach into closures and read a variable from it

// ! Because a closure is just an internal property of JavaScript

// ! But we can take a look at them using console.dir()
// ! in the [[scopes]] : scopes[]
// ! And whenever you see the double [[]] that means it is an internal property of of language that we cannot access from our code

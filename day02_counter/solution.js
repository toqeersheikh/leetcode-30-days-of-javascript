// ! First Attempt:
// const createCounter = function (n) {
//   let i = 0;

//   return function () {
//     return n + i++;
//   };
// };

// ! Optimized Solution:

const createCounter = (n) => {
  return () => n++;
  // n++: post increment: and it returns the value of n first and then increment it
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
const counter2 = createCounter(-2);

console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());

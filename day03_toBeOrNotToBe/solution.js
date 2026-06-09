//! First Attempt

// const expect = function (value) {
//   return {
//     toBe: (val1) => {
//       try {
//         if (val1 === value) {
//           return true;
//         } else {
//           throw new Error("Not Equal");
//         }
//       } catch (err) {
//          console.log(err.message);
//         return err.message;
//       }
//     },
//     notToBe: (val2) => {
//       try {
//         if (val2 !== value) {
//           return true;
//         } else {
//           throw new Error("Equal");
//         }
//       } catch (err) {
//          console.log(err.message);
//         return err.message;
//       }
//     },
//   };
// };

// ! Final Solution
const expect = function (value) {
  return {
    toBe: (val1) => {
      if (val1 === value) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (val2) => {
      if (val2 !== value) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

console.log(expect(5).toBe(5));
// console.log(expect(5).toBe(undefined));

// console.log(expect(10).notToBe(10));
console.log(expect(10).notToBe(5));

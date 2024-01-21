"use strict";
// Declaring variables in TypeScript
const a = 9;
const a1 = 9;
const naam = "Pranav";
const stringNum = "6 oranges"; // A union type to declare a value of several types each separated by a vertical bar (|)
console.log(a);
console.log(a1);
console.log(naam);
console.log(stringNum);
// ARRAYS
const arr = [93, 81, 2611];
const aRR = []; // Both `arr` and `aRR` mean the same
const arr1 = [179, 82, 92]; // This style is mostly used and is similar to generic
const mixArr = [216, "Tarun"]; // For declaring an array that contains both string and number objects
console.log(mixArr);
// Writing functions in TypeScript
const func = (n, m) => {
    console.log(n * m);
    return n * m;
};
const funcc = (n, m) => {
    console.log(n * m);
    return n * m;
};

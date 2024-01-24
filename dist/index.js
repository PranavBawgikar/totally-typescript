"use strict";
// VARIABLES
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
// FUNCTIONS
const func = (n, m) => {
    console.log(n * m);
    return n * m;
};
const funcc = (n, m) => {
    console.log(n * m);
    return n * m;
};
// Accepting optional parameters in functions
const tesaraFunc = (n, m, l) => {
    if (typeof l === "undefined") { // Here we are setting a typeguard to check if the user missed passing the third parameter, if so it only multiplies the first two parameters and returns the value
        return n * m;
    }
    return n * m * l; // Else, it returns the the product of all three parameters
};
// Rest Operator Demo
const restDemo = (...m) => {
    return m;
};
restDemo(93, 81, 2611, 179);
const user1 = {
    height: 6,
    weight: 75,
    disabled: true // Suppose male
};
const user2 = {
    height: 5.5,
    weight: 57,
};
// FUNCTION WITH OBJECTS
const getData = (product) => {
    console.log(product);
};
const getData2 = (product1) => {
    console.log(product1);
};
// CLASSES
// Demostration of a basic class creation in TS
class Player {
    constructor(height, weight, flexibility) {
        this.height = height;
        this.weight = weight;
        this.flexibility = flexibility;
    }
}
const pranav = new Player(100, 150, true);
console.log(pranav.height);
// console.log(pranav.flexibility) // This LOC will give an error in the TS file but once we compile into JS it will still provide us the value as there is no concept of access modifiers in JS
// The above code can also be written as follows
class PlayerTwo {
    constructor(height, weight, flexibility) {
        this.height = height;
        this.weight = weight;
        this.flexibility = flexibility;
    }
}
const arnav = new PlayerTwo(100, 150, false);
console.log(arnav.weight);

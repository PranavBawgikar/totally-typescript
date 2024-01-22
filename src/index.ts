// VARIABLES
const a:number = 9
const a1 = <number> 9
const naam:string = "Pranav"
const stringNum:string | number = "6 oranges" // A union type to declare a value of several types each separated by a vertical bar (|)
console.log(a)
console.log(a1)
console.log(naam)
console.log(stringNum)


// ARRAYS
const arr = [93, 81, 2611]
const aRR:number[] = [] // Both `arr` and `aRR` mean the same
const arr1:Array<number> = [179, 82, 92] // This style is mostly used and is similar to generic
const mixArr:Array<string | number> = [216, "Tarun"] // For declaring an array that contains both string and number objects
console.log(mixArr)


// FUNCTIONS
const func = (n:number, m:number):number => {
    console.log(n * m)
    return n * m
}

// Another way of defining function in TS to avoid long function definition syntax is by declaring the type of the function
type userDefined = (n:number, m:number, p?:number) => number

const funcc:userDefined = (n, m) => {
    console.log(n * m)
    return n * m
}

// Accepting optional parameters in functions
const tesaraFunc:userDefined = (n, m, l) => {
    if(typeof l === "undefined") { // Here we are setting a typeguard to check if the user missed passing the third parameter, if so it only multiplies the first two parameters and returns the value
        return n * m
    }
    return n * m * l // Else, it returns the the product of all three parameters
}

// Rest Operator Demo
const restDemo = (...m:number[]) => {
    return m
}

restDemo(93, 81, 2611, 179)


// OBJECTS
type bodyStats = {
    height:number
    weight:number
    disabled?:boolean // Declaring this property as optional using (?) symbol, if a user decides not to share his gender
}

const user1:bodyStats = {
    height: 6,
    weight: 75,
    disabled: true // Suppose male
}

const user2:bodyStats = {
    height: 5.5,
    weight: 57,
}
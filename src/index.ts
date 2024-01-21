// Declaring variables in TypeScript
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


// Writing functions in TypeScript
const func = (n:number, m:number):number => {
    console.log(n * m)
    return n * m
}

// Another way of defining function in TS to avoid long function definition syntax is by declaring the type of the function
type userDefined = (n:number, m:number) => number

const funcc:userDefined = (n, m) => {
    console.log(n * m)
    return n * m
}
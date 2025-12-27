console.log("Hello, TypeScript!");

let num: number = 100;

// Variable in TypeScript
// 1. varibale name can contain only letters, numbers, underscores, or dollar signs
// 2. variable name cannot start with a number
// 3. variable name cannot be a reserved keyword

// String variables
const str1: string = "This is a double string variable";
const str2: string = "Another string variable";

const str3: string = `Template string variable
with value: ${num}
have string ${str1}`;

console.log(str3);

// 2.NUMBER TYPE
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(decimal);

// 3.BOOLEAN TYPE
let isDone: boolean = false;
console.log(isDone);

// false values: false, 0, "", null, undefined, NaN
// examples
let isActive: boolean = Boolean(1); // true
let isInactive: boolean = Boolean(0); // false

console.log(isActive);
console.log(isInactive);

// Type inference and Type assignment
let message = "Hello, World!"; // TypeScript infers the type as string
// message = 42; // Error: Type 'number' is not assignable to type 'string'

let count: number; // Explicitly declaring the type as number
count = 10; // Valid
// count = "ten"; // Error: Type 'string' is not assignable to type 'number'

console.log(message);
console.log(count);

// Object type
let person: { name: string; age: number, gender: string } = {
    name: "John",
    age: 30,
    gender: "male"
};
 person.age = 31; // Valid
 //person.age = "thirty-one"; // Error: Type 'string' is not assignable to type 'number'
person = {
    name: "Jane",
    age: 25,
    gender: "female", // Error: Object literal may only specify known properties
};
 console.log(person);

// Array type
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["one", "two", "three"];

strings.push("four"); // Valid
// strings.push(5); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

numbers = [10, 20, 30]; // Valid
// numbers = ["ten", "twenty", "thirty"]; // Error: Type 'string' is not assignable to type 'number'

let personInfo: { name: string; age: number }[] = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 32 }
];
let mixedArray = [1, "two", 3, "four"];
mixedArray.push(5); // Valid
mixedArray.push("six"); // Valid
// mixedArray.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number' 

console.log(numbers);
console.log(strings);
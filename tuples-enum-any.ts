// Tuples in TypeScript
// A tuple is a special type of array that allows you to store a fixed number of elements with different types.
// Tuple is typed array with a pre-defined length and types for each index.

// Defining a tuple
let personTuple: [string, number, boolean];

// Initializing a tuple
personTuple = ["Alice", 30, true]; // Valid
// personTuple = [30, "Alice", true]; // Error: Type 'number' is not assignable to type 'string'

// Accessing tuple elements
console.log(personTuple[0]); // Output: Alice
console.log(personTuple[1]); // Output: 30
console.log(personTuple[2]); // Output: true

// Modifying tuple elements
personTuple[1] = 31; // Valid
// personTuple[1] = "thirty-one"; // Error: Type 'string' is not assignable to type 'number'

// Tuple with optional elements
let optionalTuple: [string, number?];
optionalTuple = ["Bob"]; // Valid
optionalTuple = ["Bob", 25]; // Also valid

// when we push method is used on a tuple, TypeScript allows adding elements beyond the defined length, but it infers the type based on the existing types in the tuple.
personTuple.push("extra element"); // Valid, but not recommended
console.log(personTuple); // Output: [ 'Alice', 31, true, 'extra element' ]

// Tuple with rest elements
let restTuple: [string, ...number[]];
restTuple = ["Numbers", 1, 2, 3, 4, 5]; // Valid
console.log(restTuple); // Output: [ 'Numbers', 1, 2, 3, 4, 5 ]

// Destructuring tuples
let [name1, age, isEmployed] = personTuple;
console.log(name1); // Output: Alice
console.log(age); // Output: 31
console.log(isEmployed); // Output: true

// Enums in TypeScript
// An enum is a special "class" that represents a group of constants (unchangeable variables).

const user = {
    name: "Charlie",
    role: 1, // 0 - Admin, 1 - User, 2 - Guest  
    age: 25,
    gender: 'male'
}

if (user.role === 0) {
    console.log("Admin User");
} else if (user.role === 1) {
    console.log("Regular User");
} else if (user.role === 2) {
    console.log("Guest User");
} else {
    console.log("Unknown Role");
}

// Using Enums
enum Role {
    Admin, // 0
    User,  // 1
    Guest  // 2
}

const userWithEnum = {
    name: "Charlie",
    role: Role.User, // Using enum
    age: 25,
    gender: 'male',
}

if (userWithEnum.role === Role.Admin) {
    console.log("Admin User");
} else if (userWithEnum.role === Role.User) {
    console.log("Regular User");
} else if (userWithEnum.role === Role.Guest) {
    console.log("Guest User");
} else {
    console.log("Unknown Role");
}

// Any type in TypeScript
// The any type is a powerful way to work with existing JavaScript, allowing you to opt-out of type checking for a variable.

let randomValue: any = 10;
console.log(randomValue); // Output: 10

randomValue = "Hello";
console.log(randomValue); // Output: Hello

randomValue = true;
console.log(randomValue); // Output: true

// Using any type in arrays
let mixedArrayAny: any[] = [1, "two", true];
mixedArrayAny.push(3.14); // Valid
mixedArrayAny.push("four"); // Valid
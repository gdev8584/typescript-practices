console.log("Hello, TypeScript!");
var num = 100;
// Variable in TypeScript
// 1. varibale name can contain only letters, numbers, underscores, or dollar signs
// 2. variable name cannot start with a number
// 3. variable name cannot be a reserved keyword
// String variables
var str1 = "This is a double string variable";
var str2 = "Another string variable";
var str3 = "Template string variable\nwith value: ".concat(num, "\nhave string ").concat(str1);
console.log(str3);
// 2.NUMBER TYPE
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal);
// 3.BOOLEAN TYPE
var isDone = false;
console.log(isDone);
// false values: false, 0, "", null, undefined, NaN
// examples
var isActive = Boolean(1); // true
var isInactive = Boolean(0); // false
console.log(isActive);
console.log(isInactive);
// Type inference and Type assignment
var message = "Hello, World!"; // TypeScript infers the type as string
// message = 42; // Error: Type 'number' is not assignable to type 'string'
var count; // Explicitly declaring the type as number
count = 10; // Valid
// count = "ten"; // Error: Type 'string' is not assignable to type 'number'
console.log(message);
console.log(count);
// Object type
var person = {
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
var numbers = [1, 2, 3, 4, 5];
var strings = ["one", "two", "three"];
strings.push("four"); // Valid
// strings.push(5); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
numbers = [10, 20, 30]; // Valid
// numbers = ["ten", "twenty", "thirty"]; // Error: Type 'string' is not assignable to type 'number'
var personInfo = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 32 }
];
var mixedArray = [1, "two", 3, "four"];
mixedArray.push(5); // Valid
mixedArray.push("six"); // Valid
// mixedArray.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number' 
console.log(numbers);
console.log(strings);

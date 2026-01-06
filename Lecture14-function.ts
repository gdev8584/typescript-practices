// function. return type annotation
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 10)); // Output: 15

// function with void return type
function logMessage( num1: number, num2: number ) {
    return (num1 + num2).toString();
}

console.log(logMessage(3, 7)); // Output: "10"

// function with never return type
function throwError(message: string): never {
    throw new Error(message);
}

// Uncommenting the following line will throw an error
// throwError("This is a critical error!");

// Function with optional parameter
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet("Alice")); // Output: "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // Output: "Good morning, Bob!"

// Function with default parameter
function multiply(a: number, b: number = 2): number {
    return a * b;
}

console.log(multiply(5)); // Output: 10
console.log(multiply(5, 3)); // Output: 15

// Function with rest parameters
function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

// Function overloads
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
    return a + b;
}

console.log(combine("Hello, ", "world!")); // Output: "Hello, world!"
console.log(combine(10, 20)); // Output: 30

// function as a type
type Operation = (x: number, y: number) => number;

const addOperation: Operation = (x, y) => x + y;
const multiplyOperation: Operation = (x, y) => x * y;

console.log(addOperation(4, 5)); // Output: 9
console.log(multiplyOperation(4, 5)); // Output: 20

// Callback function example
function performOperation(x: number, y: number, operation: Operation): number {
    return operation(x, y);
}

console.log(performOperation(6, 3, addOperation)); // Output: 9
console.log(performOperation(6, 3, multiplyOperation)); // Output: 18

// Anonymous function example
setTimeout(function() {
    console.log("This message is displayed after 2 seconds");
}, 2000);

// Arrow function example
const divide = (a: number, b: number): number => a / b;

console.log(divide(10, 2)); // Output: 5

// IIFE (Immediately Invoked Function Expression) example
(function(message: string) {
    console.log(`IIFE says: ${message}`);
})("Hello from IIFE!");

// Recursive function example
function factorial(n: number): number {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // Output: 120

// Anonymous recursive function example
const fibonacci = (function fib(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
});

console.log(fibonacci(6)); // Output: 8

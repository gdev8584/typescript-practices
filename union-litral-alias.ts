// Union literal alias example

// UNION TYPE IN TYPESCRIPT
// it allows a variable to hold multiple types.
// use the pipe (|) symbol to separate the types.
// example:
let user : { name: string; age: number} | null = null;

function getUser() {
    const uname = 'join';
    const uage = 28;
    user = { name: uname, age: uage };
    return user;
}
getUser();
console.log(user);

function printStatus(message: string, code: string | number) {
    console.log(`Status: ${message}, Code: ${code}`);
}

printStatus("Success", 200);
printStatus("Error", "404 Not Found");

// LITERAL TYPE IN TYPESCRIPT
// it allows to specify exact values a variable can hold.
// useful for defining specific options or modes.
// example:

const str = "hello world"; // type is string
let str2 = 'hello world'; // type is string
const strLiteral: "hello world" = "hello world"; // type is the literal "hello world"

function roleMessage(role: "admin" | "editor" | "viewer") {
    switch (role) {
        case "admin":
            console.log("You have full access.");
            break;
        case "editor":
            console.log("You can edit content.");
            break;
        case "viewer":
            console.log("You can view content.");
            break;
        default:
            console.log("Role not recognized.");
    }
}
roleMessage("admin");
roleMessage("editor");
roleMessage("viewer");
//roleMessage("guest") // Error: Argument of type '"guest"' is not assignable to parameter of type '"admin" | "editor" | "viewer"'.

// ALIAS TYPE IN TYPESCRIPT
// it alows to create a new name for a type.
// create custom types using type keyword.
// example:

type stringType = string;
type stringOrNumber = string | number;
type User = { name: string; age: number };

let username: stringType = "Alice";
let userId: stringOrNumber = 12345;
let anotherUser: User = { name: "Bob", age: 30 };

type user = { firstName: string; lastName: string, age: number };

function printUserInfo(u: user) {
    console.log(`User: ${u.firstName} ${u.lastName}, Age: ${u.age}`);
}

function isEligibleToVote(age: number): boolean {
    return age >= 18;
}
const sampleUser: user = { firstName: "Charlie", lastName: "Brown", age: 25 };
printUserInfo(sampleUser);
console.log(`Is eligible to vote: ${isEligibleToVote(sampleUser.age)}`);

// Combining union types with type aliases
type Status = "active" | "inactive" | "pending";
type Response1 = { status: Status; data: string } | { status: "error"; error: string };

function handleResponse(response: Response1) {
    if (response.status === "error") {
        console.log(`Error: ${response.error}`);
    } else {
        console.log(`Status: ${response.status}, Data: ${response.data}`);
    }
}

handleResponse({ status: "active", data: "User is active" });
handleResponse({ status: "error", error: "Something went wrong" });
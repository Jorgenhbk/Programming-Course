let age: number = 12;
let fullName: string = 'John Doe';
let isOfAge: boolean = false;
let something: any = 3;

something = 'string';

// Arrays
let names: string[] = ['John', 'Jane', 'Jack'];

//same but different
let address: string | string[] = ["asda", "as"];
let whatever: string | string[] = "🤨";

// !!! Danger of "any"!!!
let greeting: any = `3`;

let somethingElse: number = <number>greeting;

console.log(typeof somethingElse);


// Declare a custom type 'User' which can be either a string or an array of strings
type User = string | string[];

// Define a constant 'user' of type 'User', and initialize it with the string "John"
const user: User = "John";



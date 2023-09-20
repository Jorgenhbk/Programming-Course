let age: number = 12;
let fullName: string = "John Doe";
let isOfAge: boolean = false;
let something: any = 3;

something = "string";

// Arrays
let names: string[] = ["John", "Jane", "Jack"];

//same but different
let address: string | string[] = ["asda", "as"];
let whatever: string | string[] = "🤨";

// !!! Danger of "any"!!!
let greeting: any = `3`;

let somethingElse: number = <number>greeting;

console.log(typeof somethingElse);

// // Declare a custom type 'User' which can be either a string or an array of strings
// type User = string | string[];

// // Define a constant 'user' of type 'User', and initialize it with the string "John"
// const user: User = "John";

type User = {
  id: number;
  name: string;
  admin?: boolean;
};

// funtion that returns a User object with the given parameters and an optional admin parameter that defaults to false if not provided
const setUser = (id: number, name: string, admin?: boolean): User => {
  return {
    id,
    name,
    // if not provided set to false
    admin: admin ? admin : false,
  };
};

const user: User = setUser(3, "Bob");

console.log(user);

// Define a constant 'users' of type 'User[]' (array of User objects), and initialize it with an array of User objects
const users: User[] = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane", admin: true },
];

console.log(users);

// interface
interface UserInterface {
  id: number;
  name: string;
  admin?: boolean;
}

class Person implements UserInterface {
    id: number = 0;
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const peter = new Person("Peter", 23);
console.log(peter);

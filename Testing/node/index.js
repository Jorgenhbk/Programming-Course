"use strict";
let age = 12;
let fullName = "John Doe";
let isOfAge = false;
let something = 3;
something = "string";
// Arrays
let names = ["John", "Jane", "Jack"];
//same but different
let address = ["asda", "as"];
let whatever = "🤨";
// !!! Danger of "any"!!!
let greeting = `3`;
let somethingElse = greeting;
console.log(typeof somethingElse);
// funtion that returns a User object with the given parameters and an optional admin parameter that defaults to false if not provided
const setUser = (id, name, admin) => {
    return {
        id,
        name,
        // if not provided set to false
        admin: admin ? admin : false,
    };
};
const user = setUser(3, "Bob");
console.log(user);
// Define a constant 'users' of type 'User[]' (array of User objects), and initialize it with an array of User objects
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane", admin: true },
];
console.log(users);
class Person {
    constructor(name, age) {
        this.id = 0;
        this.name = name;
        this.age = age;
    }
}
const peter = new Person("Peter", 23);
console.log(peter);

// Where destructuring in ES6 allows you to get properties out of
// an object, the shorthand property syntax allows you to easily 
// push properties in. 

let firstName = "John";
let lastName = "Lindquist";

let person = {firstName, lastName};
// so we don't have to do this anymore:
let person = {
    firstName: firstName,
    lastName: lastName
}

console.log(person); // {firstName: "John", lastName: "Lindquist"}

let mascot = "Moose";
let team = {person, mascot};
console.log(team); /* { 
        person: { firstName: "John", lastName: "Lindquist" }, 
        mascot: "Moose"
    } */
function greet(greeting, name = "John") {
    console.log(greeting + ", " + name);
}

greet(); // undefined John
greet("Hello"); // Hello, John
greet("Hello", "Bill"); // Hello, Bill

// Where it gets a little crazier is when you assign a default 
// function to one of the arguments.
function receive(complete = () => console.log("complete")) {
    complete();
}

receive();
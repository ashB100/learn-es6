// You create a generator by adding * after function:
function* greet() {
    console.log(`You called 'next()'`);
}

greet();  // nothing will happen

let greeter = greet();

console.log(greeter); // {next: [Function], throw: [Function]}

// greeter is actually an object that you can call next() on

let next = greeter.next();

console.log(next);  // You called 'next()'
                    // { value: undefined, done: true }

// You can see it now printed "You called 'next()" 
// and it's and object with properties, value: undefined,
// and done: true
// value is undefined because we didn't yield anything 
// from our generator. done is true because it has
// gone through all of the yield statements. Which
// there are none right now.


// So if we yeild a simple 'hello':

function* anotherGreet() {
    console.log(`You called 'next()'`);
    yield "hello";
}
let greeter2 = anotherGreet();
let next2 = greeter2.next();
console.log(next);  // You called 'next()'
                    // {value: "hello", done: false }

// done is false this time. It will be set to true
// if greeter2.next() is called again.

let done = greeter2.next();
console.log(done);  // { value: undefined, done: true }

// So if you have multiple yield statements and you only
// call greeter.next() once you can see that it stops
// after calling yield "How". Nothing after the first
// yield are called. If you were to create any objects
// in code after the first yield they would not be
// created until you call next(). So you can put stuff
// in the code that comes after but they're not created
// until you explicitly need it. 
function* greet() {
    console.log(`Generators are "lazy"`);
    yield "How";
    console.log(`I'm not called until the second next`);
    yield("are");
    console.log(`Call me before "you?"`);
    yield("you?");
    console.log(`Called when "done"`);
}

var greeter = greet();
console.log(greeter.next());    // Generators are "lazy"
                                // {value: "How", done: false}


// You can now call next() three more times and you
// will see it logs out each log statement and yield
// statement:
console.log(greeter.next());
console.log(greeter.next());
console.log(greeter.next());

/* 
I'm not called until the second next
{value: "are", done: false}
Call me before "you?"
{value: "you?", done: false}
Called when "done"
{value: undefined, done: true}
*/

// Because it is an iterator, you can also use the 
// for of syntax. You can see the output is almost
// the same. The main difference is that word is 
// grabbing the value off of the next(), ie same as if 
// we do console.log(greeter.next().value)
var greeter = greet();
for(let word of greeter) {
    console.log(word);
}
/*
Generators are "lazy"
How
I'm not called until the second next
are
Call me before "you?"
you?
Called when "done"
*/


// It is really easy to get mixed up when we are 
// assigning things to yield statements. You may 
// expect friendly to log out "How" but it is actually
// logging out undefined. 
// The way this works is the next() step through the
// iteration can pass a value into next(), eg.
// next(" the heck ") --> this gets assigned to friendly
function* greet() {
    let friendly = yield "How";
    console.log(friendly); // undefined
    yield "are";
    yield "you?";
}
var greeter = greet();
console.log(greeter.next().value); // How
                                   //  the heck
console.log(greeter.next(" the heck ").value); // are
console.log(greeter.next().value); // you?

// So that means that you can start building things
// through the iteration process:
function* greet() {
    let friendly = yield "How";
    friendly = yield friendly + "are";
    yield friendly + "you?"
}
var greeter = greet();
console.log(greeter.next().value); // How
console.log(greeter.next(" the heck ").value); //  the heck are
console.log(greeter.next(" silly ol'").value); //  silly ol' you?

// One thing to note is that because this assignment
// happens on the run after the first one, it is 
// actually impossible to pass a value in the first
// next()! You will get a type error, because you 
// haven't given it a chance to run and iterate and 
// go to the next step where you can actually pass 
// in a value. 
function* greet() {
    let friendly = yield "How";
    friendly = yield friendly + "are";
    yield friendly + "you?"
}
var greeter = greet();
console.log(greeter.next("First").value); // TypeError: Sent value to a newborn generator


// Generators also help you work with infinite sequences
// In our case, the while true will never stop looping, 
// I can safely yield {x:x, y:y} knowing that x+=2; and x+=1
// isn't going to evaluate until the next iteration. 
// It will safely pause instead of infinitely going
// through the while loop. They are only created as
// I request for them through the yield, they are not
// created ahead of time.
function* graph() {
    let x = 0;
    let y = 0;
    
    while (true) {
        yield { x:x, y:y };
        x += 2;
        y += 1;
    }
}

var graphGenerator = graph();
console.log(graphGenerator.next().value); // {x: 0, y: 0}
console.log(graphGenerator.next().value); // {x: 2, y: 1}


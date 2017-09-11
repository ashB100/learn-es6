// Use string literals by wrapping your string in ``.
// ES6 allows you to put variables inside of your string by putting
// it in ${}
// It respects white space even across multiple lines. 
var salutation = "Hello";
var place = "planet"
var greeting = `${salutaion}, 
    You
        Crazy       ${place}
        
        How
    Are
         You`;


// You can do expressions inside ${}
var x = 1;
var y = 2;
var equation = `${x} + ${y} = ${x + y}`;

console.log(equation);

// Basic introduction to tagging the string templates .
// Just type the function name infront of the template string: 
// notice that we don't put any parameters or anything around
// this. Just type the function name, you can name it whatever 
// you want.  
// Declare the function, it takes strings and ...values, 
// strings being an array of the string sections of the literal.
// There is much more advanced stuff you can do with this such as
// parsing HTML and using RegEx

var message = tag`Its ${new Date().getHours()} Im sleepy`;
function tag(strings, ...values){
    console.log(strings); // [ 'It\'s', 'I\'m sleepy' ]
    console.log(values);  // [ 15 ]
}

function tag(strings, ...values){
    if(values[0] < 20) {
        values[1] = "awake";
    }

    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}

var message = tag`It's ${new Date().getHours()} I'm ${""}`;

console.log(message);



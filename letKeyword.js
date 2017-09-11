// Let allows us to use block scoping

let message = "hi";

{
    let message = "bye";
}

console.log(message);  // hi


var fs = [];

for (var i = 0; i < 10; i++) {
    fs.push(function() {
        console.log(i);
    })
}

fs.forEach(function(f) {
    f();
}); // this will print 10, 10 times as its the same i that each 
    // function in the array is referring to

// If we replace var with let, it will create a new i each time we
// go through the for loop. Our result will be 0 through 9.
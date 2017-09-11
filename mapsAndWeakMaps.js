// The map object is just a simple key value map.
// JavaScript objects and maps are very similar to 
// each other. Before the introduction of maps
// in ES6 objects were used in order to keep
// track of different key value pairs.

// H

var myMap = new Map()

// API
/*
set()
get()
size
clear()
has()
*/

myMap.set('foo', 'bar');
myMap.set('hello', 'world');

console.log(myMap.get('foo')); // bar

// If we attempt to access a value that does not
// exist, we get undefined back
console.log(myMap.get('qwerty')); // undefined

// size gives the size of the map
console.log(myMap.size); // 2

// clear, clears the map
myMap.clear();

console.log(myMap.size); // 0

console.log(myMap.has('foo')); // true
console.log(myMap.has('querty')); // false

// Map gives us several iterators to go over our map
// to access they keys, values and entries:

// Iterators
// keys()
// entries()
// values()

for (var key of myMap.keys()) {
    console.log(key);
} 
// logs:
// foo
// hello

for (var value of myMap.values()) {
    console.log(value);
}
// logs:
// bar
// world

for (var [key, value] of myMap.entries()) {
    console.log(`${key}: ${value}`);
}
// logs:
// foo: bar 
// hello: world

// Weak maps: what a weak map means is that no references
// are held to the keys of the map, which allows it 
// be available for automatic garbage collection that's
// available to us in JavaScript. 
// Because no references are kep to the keys, that means
// that they are not enumerable or we cannot
// iterate over them. Because of this the options
// of what is available for us to use as keys in our
// map is limited when using weakMaps.

// E.g. with a map we can use anything as our key.

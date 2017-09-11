// ...[] spreads the array out into its individual elements

console.log([1, 2, 3]); // [1, 2, 3]

console.log(...[1, 2, 3]); // 1 2 3

let first = [1, 2, 3];
let second = [4, 5, 6];

first.push(second);
console.log(first); // [1, 2, 3, [4, 5, 6]];

// If we spread out the second array and push that in,
// we get individual items from second array pushed to first 
first.push(...second);
console.log(first); // [1, 2, 3, 4, 5, 6];

// we can push the items again:
first.push(...second);
console.log(first); // [1, 2, 3, 4, 5, 6, 4, 5, 6];


// This works for pushing in things for parameters:
function addThreeThings(a, b, c) {
    let result = a + b + c;
    console.log(result);
}

addThreeThings(...first);  // 6
addThreeThings(...second);  // 15

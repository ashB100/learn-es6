// The callback inside the promise takes two arguments:
// resolve and reject
// Promises can either be resolved or rejected. 
// When you resolve the promise .then will fire
// and when you reject the promise .catch will fire instead.
// Inside your promise you have some sort of logic that
// decides whether you resolve or reject your promise.
var d = new Promise((resolve, reject) => {
    if (true) {
        resolve('Hello world');
    } else {
        reject('no bueno');
    }
});

// The then method has a callback function as
// and argument. The function receives an argument
// from the promise (whatever was passed to resolve fun)
d.then((data) => console.log('success: ', data));

d.catch((error) => console.log('error: ', error));

// Promises allow you to process asynchronous operations
// in a synchronous like manner. 
var e = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('Hello world');
        } else {
            reject('no bueno');
        }    
    })
})

e.then((data) => console.log('success: ', data));
e.catch((error) => console.log('error: ', error));

// There are several different ways you can use 
// when dealing with your .then() and .catch()
// callbacks. If you don't prefer to use the 
// .catch() method, you can then supply a second
// argument into the .then() method which will
// act as an error callback:
var f = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (true) {
            resolve('Hello world');
        } else {
            reject('no bueno');
        }  
    }, 2000)
});

f.then((data)=> console.log('success: ', data), 
(error) => console.log('error: ', error));

// .then() and .catch() can also be chained together
var g = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (true) {
            resolve('Hello world');
        } else {
            reject('no bueno');
        }  
    }, 2000)
});
g.then((data)=> console.log('success: ', data))
 .catch((error) => console.log('error: ', error));

 // Alternatively, we can chain several .then()'s 
 // together and have then called in succession.
 // If you don't return something from the first
 // .then() the second .then() will receive undefined
 // into its parameter.
 g.then((data)=> {
        console.log('success1: ', data);
        return "foo bar";
    })
    .then((data)=> console.log('success2: ', data))
    .catch((error) => console.log('error: ', error));

// One more thing to note is whenever an error or 
// exception is thrown within the promise it will
// automatically trigger the .catch() to call 
// regardless of when that error is thrown:
var h = new Promise((resolve, reject) => {
    throw new Error('error thrown!');

    setTimeout(() => {
        if (true) {
            resolve("hellow world");
        }
        else {
            reject('no bueno');
        }
    }, 2000);
});

h.then((data)=> {
    console.log('success1: ', data);
    return "foo bar";
})
.then((data)=> console.log('success2: ', data))
.catch((error) => console.log('error: ', error));

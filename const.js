// It is best practice to name constants in uppercase letter.
// A const declaration allow us to declare a variable which is
// read-only. If we tried to re-assign the value we will get 
// a VALUE is read only error

// What a const is is not actaully a constant variable but a constant
// reference. 
const VALUE = "hello world";
VALUE = "Hi there"; // error Value is read only

const VALUE2 = {};
VALUE2.foo = "bar";
console.log("value: ", VALUE2); // value: { foo: 'bar' }
VALUE2 = "bar"; // VALUE2 is read only 

// Like let declarations, const declarations adhere to block scope
// Block scope can simply be understood as anything between 
// two curly blackets {}
if (true) {
    const FOO = "bar";
}
console.log(FOO); // ModuleEvaluationError: FOO is not defined
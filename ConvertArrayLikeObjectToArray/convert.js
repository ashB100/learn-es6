const products = Array.from(document.querySelectorAll('.product'));

// If you inspect this in the browser, you will see that this
// product list is of type NodeList 
// The problem with NodeList is that it is like an array but 
// it is not an array so it does not have all the typical
// array methods that we want to use, like filter(), forEach, reduce
// What we can do is convert this NodeList to Array using Array.from()
// method provided in ES6.

console.log(product); // [li.product, li.product, li.product]

products
    .filter(product => parseFloat(product.innerHTML) < 10)
    .forEach(product => product.style.color = 'red');

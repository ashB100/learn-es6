// rest parameters vs argument keyword
// While arguments is array like it does not have
// all the methods that array prototype has.
function myFunc() {
    console.log(arguments.length);
}

myFunc();

// Before ES6 
function Store() {
    var aisle = {
        fruit: [],
        vegetable: []
    }
    return {
        add: function(category) {
            var items = [].splice.call(arguments, 1);
            //console.log(items);
            items.forEach(function(value, index, array) {
                aisle[category].push(value);
            })
        },
        aisle: aisle
    }
}

var myGroceryStore = new Store();
myGroceryStore.add('fruit', 'apples', 'oranges');
console.log(myGroceryStore.aisle);

// ES6
function Store() {
    var aisle = {
        fruit: [],
        vegetable: []
    }
    return {
        add: function(category, ...items) {
            items.forEach(function(value, index, array) {
                aisle[category].push(value);
            })
        },
        aisle: aisle
    }
}

var myGroceryStore = new Store();
myGroceryStore.add('fruit', 'pears', 'peaches');
console.log(myGroceryStore.aisle);
// Typically in JavaScript if you have an object with some property
// and value and you want to log that out you would assign it to a 
// variable and say console.log(thatVariable.propertyName):
var obj = {
    color: "blue"
};

console.log(obj.color); // blue

// Destructuring allows you to do this a little bit differently:
var {color} = {
    color: "blue"
};

console.log(color); // blue

// This also works when you have multiple properties:
var {color, position} = {
    color: "blue",
    name: "John",
    state: "New York",
    position: "Forward"
}

console.log(color);     // blue
console.log(position);  // Forward

// A very common scenario where you will see destructuring come into
// play is when you have a function which returns an object but you
// only want some of the properties from that object:
function generateObj() {
    return {
        color: "blue",
        name: "John",
        state: "New York"
    };
}

var {name, state} = generateObj();

console.log(name);  // John
console.log(state); // New York

// If you want these named something else you can actually just 
// put a colon and give a different name to the variable. 
// Lookup name but assign it to firstName, lookup state but
// assign it to location
var {name: firstName, state: location} = generateObj();

console.log(firstName); // John
console.log(location);  // New York

// Where it goes crazy is when you have an array and you only 
// want the first and fifth item and you don't care about the 
// second, third and fourth:
var [first,,,,fifth] = ["red", "yellow", "green", "blue", "orange"];
console.log(first); // red
console.log(fifth); // orange


var people = [
    {
      "firstName": "Clinton",
      "lastName": "Ruiz",
      "phone": "1-403-985-0449",
      "email": "pharetra@facilisislorem.org",
      "address": "Ap #829-3443 Nec St."
    },
    {
      "firstName": "Skyler",
      "lastName": "Carroll",
      "phone": "1-429-754-5027",
      "email": "Cras.vehicula.alique@diamProin.ca",
      "address": "P.O. Box 171, 1135 Feugiat St."
    },
    {
      "firstName": "Kylynn",
      "lastName": "Madden",
      "phone": "1-637-627-2810",
      "email": "mollis.Duis@ante.co.uk",
      "address": "993-6353 Aliquet, Street"
    },
    {
      "firstName": "Chaney",
      "lastName": "Edwards",
      "phone": "1-397-181-4501",
      "email": "rutrum@Nullamlobortis.net",
      "address": "P.O. Box 342, 9574 Egestas Street"
    }
  ]
  
  // We can use destructuring to get the firstName property only
  // out of the object that gets passed to forEach and log it
  people.forEach(({firstName}) => console.log(firstName))
  
  // This looks up the second item from people array
  // and names it Skyler
  var [,Skyler] = people;
  
  function logEmail({email}){
    console.log(email);
  }
  
  // Skyler is the object with Skyler's info, second item from people
  logEmail(Skyler);
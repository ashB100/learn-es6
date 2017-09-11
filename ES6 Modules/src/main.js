/**
 * This is our "Entry Point"
 */

// Import a third-party package:
import * as _ from 'lodash';

// Import everything from 'math/addition' and give it 
// an alias, addition:
import * as addition from 'math/addition';

// Alternatively, could import in this way:
// We can give each of our import name an alias
/* import { 
    sumTwo as addTwoNumbers,
    sumThree 
  } from 'math/addition'; */

// Import users from our 'data/users' module
import {users} from 'data/users';

console.log(_.where(users, {age: 36}));

console.log(
  "1 + 3",
  addition.sumTwo(1, 3)
);

console.log(
  "1 + 3 + 4",
  addition.sumThree(1, 3, 4)
);
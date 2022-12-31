'use strict';
pi = 3.1416;
console.log(pi); // ReferenceError: pi is not defined. No va a haber Hoisting. Se debe declarar y asignar para poder utilizar la variable en modo estricto.

function myFunction () {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction()); // ReferenceError: pi is not defined.


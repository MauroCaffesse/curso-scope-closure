var firstName; // valor: Undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = 'David'; // declarar y asignar
lastName = 'Ana'; // reasignar
console.log(lastName); // Ana

var secondName = 'David'; // declarar
var secondName = 'Ana'; // redeclarar
console.log(secondName); // Ana. es posible tanto reasignar como redeclarar.

// Let

let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit); // Kiwi

let fruit = 'Banana'; // No se puede redeclarar una variable con let.
console.log(fruit); // Error

// Const

const animal = 'dog'; // declarar y asignar
animal = 'cat'; // reasignar
console.log(animal); // Error, dog. No es posible reasignar valor a una variable const.

const animal = 'Snake'; // no es posible redeclarar variable const.
console.log(animal); // Error

const vehicles = [];
vehicles.push('carrito');
console.log(vehicles); 

vehicles.pop();
console.log(vehicles);
// devuelve el array con el carrito, y luego el array vacío. Pero no estamos reasignando ni redeclarando. Sobre el arreglo pueden utilizarse métodos (como push y pop).


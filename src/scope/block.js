 function fruits () {
    if (true) {
        var fruit1 = 'Apple'; // function scope (var)
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
 }

 fruits(); // solamente figura Apple, ya que es function scope, mientras que las otras 2 tienen alcance dentro del bloque.

 // Por esto mismo está dejándose de usar var para declarar variables.

 function fruits () {
    if (true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
        console.log(fruit2);
        console.log(fruit3);
    }
console.log(fruit1);
 }

 fruits(); // al llamar la función, figura Kiwi, Banana y luego Apple, debido a que primero se invocan fruit2 y fruit3 dentro del bloque, mientras que fruit1 se invoca por fuera del bloque pero dentro de la función.
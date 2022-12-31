// variables

var a; //declarando
var b = 'b'; //declaramos / asignamos
b = 'bb'; //reasignación
var a = 'aa'; //redeclaración


// Global Scope
var fruit = 'Apple'; // global
console.log(fruit); //Apple

function bestFruit() {
    console.log(fruit);
}

bestFruit(); //Apple

// Al no declarar una variable, por defecto pasa a ser una variable GLOBAL

function countries() {
    country = 'Colombia'; // Se asignó dentro de la función pero no fue declarada --> Global
    console.log(country);
}

countries(); // Colombia
console.log(country); //Colombia --> pasó a ser variable global
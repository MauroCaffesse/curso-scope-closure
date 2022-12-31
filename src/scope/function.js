function greeting() {
    let userName = 'Ana'; //asignación y declaración
    console.log(userName); // invocación

    if (userName === 'Ana') { // validación
        console.log(`Hello ${userName}!`); // invocación
    }

}

greeting(); // ejecución de función

console.log(userName); // no fue posible acceder a la variable, ya que fue declarada dentro de una función, por lo que no es global.
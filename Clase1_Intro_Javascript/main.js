// Reposotorio en Github: https://github.com/Frank0125/SoyTutor_IntroJavaScript

// Clase 1: Introducción a JavaScript

// Declaración de variables - Tres formas de declarar variables en JavaScript
let nombre = "Juan";
const edad = 25;
var esEstudiante = true;


// Modificar variables
nombre = "Pedro";
//edad = 30; // Esto dará error porque no se puede modificar una constante
esEstudiante = false;


// Imprimir en consola
console.log("Hola Mundo \n");
// \n es un caracter de "espacio" o "salto de línea" en el texto
console.log(nombre);
console.log(edad);
console.log("Es", nombre, "un estudiante?", (esEstudiante ? "Sí" : "No"), "\n");


//Diferencia entre let y var??? ->

// var: Se puede re-declarar y sobrescribir en el mismo ámbito
// Ejemplo con var
function ejemploVar() {
    var nombreVar = "Juan";
    if (true) { // Nuevo ámbito o bloque
        var nombreVar = "Pedro"; // Re-declara y sobrescribe en el mismo ámbito
        console.log("Dentro del bloque if, nombreVar:", nombreVar); // Pedro
    }
    console.log("Fuera del bloque if, nombreVar:", nombreVar); // Pedro
}

// let: No puede redeclararse en el mismo ámbito, pero puede ser redeclarada en diferentes bloques.
// Ejemplo con let
function ejemploLet() {
    let nombreLet = "Super Juan";
    if (true) { // Nuevo ámbito o bloque
        let nombreLet = "Super Pedro"; // Nueva variable en el ámbito del bloque
        console.log("Dentro del bloque if, nombreLet:", nombreLet); // Super Pedro
    }
    console.log("Fuera del bloque if, nombreLet:", nombreLet); // Super Juan
}


// Operaciones básicas
let suma = 10 + 5;
let resta = 10 - 5;
let multiplicacion = 10 * 5;
let division = 10 / 5;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);

console.log("Resultado de Todas las Operaciones: " + (suma + resta + multiplicacion + division));
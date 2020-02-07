// Calculadora

// Crear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION y MULTIPLICACION, y luego de elegida, ingresar dos números y hacer dicha operación con ella.

let value1 = 0;
let value2 = 0;
let result = 0;
let operation = "";

operation = prompt(`
Elija una operación:
1 - sumar
2 - restar
3 - dividir
4 - multiplicar`);

value1 = Number(prompt("Elija el valor 1"));
value2 = Number(prompt("Elija el valor 2"));

if (operation == 1) { // SUMAR
    result = value1 + value2;

} else if (operation == 2) { // RESTAR
    result = value1 - value2;

} else if (operation == 3) { // DIVIDIR
    result = value1 / value2;

} else if (operation == 4) { // MULTIPLICAR
    result = value1 * value2;

} else { // ERROR
    alert("No ingresó una opción correcta");
}

alert("El resultado es " + result);
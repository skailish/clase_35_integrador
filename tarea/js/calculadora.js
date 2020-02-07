// Calculadora

// Crear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION y MULTIPLICACION, y luego de elegida, ingresar dos números y hacer dicha operación con ella. Si se ingresa una opción incorrecta debe mostrar un mensaje de error.


let value1 = 0;
let value2 = 0;
let operation = "";

// DEFINE OPERACIÓN
operation = prompt(`
Elija una operación:
sumar
restar
dividir
multiplicar`);
// DEFINE VALORES
value1 = Number(prompt("Elija el valor 1"));
value2 = Number(prompt("Elija el valor 2"));

switch (operation) {
    case "sumar":
        alert(`El resultado es ${(value1 + value2)}`)
        break;
    case "restar":
        alert(`El resultado es ${(value1 - value2)}`)
        break;
    case "dividir":
        alert(`El resultado es ${(value1 / value2)}`)
        break;
    case "multiplicar":
        alert(`El resultado es ${(value1 * value2)}`)
        break;
    default:
        alert("Ingrese una opción válida")
}

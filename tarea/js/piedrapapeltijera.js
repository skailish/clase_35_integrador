// Piedra, papel o tijera

// Crear un programa que permita ingresar al jugador piedra, papel o tijera, genere de forma aleatoria la jugada de la computadora, y muestre en un mensaje quién ganó, con las jugadas respectivas.

let number = Math.round(Math.random() * 2);
let computer = "";
const user = prompt("Elija PIEDRA, PAPEL o TIJERA");

// DEFINE COMPUTADORA
if (number == 0) {
    computer = "piedra";
} else if (number == 1) {
    computer = "papel";
} else {
    computer = "tijera";
}

// DEFINE JUGADA
let result = "";


/// CONDICIONES PARA DEFINIR RESULTADO
if (computer == user) { /// EMPATE
    result = `Empate`;
} else { /// NO EMPATE
    if ((computer == "piedra" && user == "tijera") || (computer == "papel" && user == "piedra") || (computer == "tijera" && user == "papel")) {
        result = `Perdiste`;
    } else if ((user == "piedra" && computer == "tijera") || (user == "papel" && computer == "piedra") || (user == "tijera" && computer == "papel")) {
        result = `Ganaste`;
    } else {
        alert("No se ingresó un valor correcto");
    }
}

/// MENSAJE FINAL, sea cuál sea el resultado
alert(`La computadora eligió: ${computer};
El jugador eligió: ${user}
${result}`);
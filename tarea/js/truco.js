// Truco

// Crear un programa que permita ingresar una carta del truco(mazo español, sin ochos y nueves) ingresando número y palo por separado.Hacer que el programa elija aleatoriamente otra carta.Mostrar un mensaje con ambas cartas, indicando cuál gana a cuál(o si empatan).

// Orden de las cartas, de mayor valor a menor:

// 1 de espadas
// 1 de bastos
// 7 de espadas
// 7 de oros
// 3
// 2
// 1 de copa y 1 de oro
// 12
// 11
// 10
// 7 de copas y 7 de bastos
// 6
// 5
// 4
// // Ejemplo
// Ingrese el número de la carta: 7
// Ingrese el palo de la carta: espada

// Has elegido: 7 de espada
// Computadora eligió: 3 de copa

// ¡Has ganado!


/// DEFINE CARTAS COMPUTADORA
let valor1 = Math.round(Math.random() * 9) + 1;
let palo1 = Math.round(Math.random() * 4);
/// DEFINE CARTAS JUGADOR
let valor2 = Number(prompt("Ingrese el número de su primer carta usando números del 1 al 10"));
const palo2 = prompt("Ingrese el palo de su primer carta");

/// DEFINE VARIABLES
let cartaComputadora = "";
let cartaJugador = "";
let ganador = "";
let figura1 = valor1;
let figura2 = valor2;



/// CAMBIA 8, 9, 10 por el nombre de su figura
if (valor1 > 7 || valor2 > 7) {
    if (valor1 > 7) {
        if (valor1 == 7) {
            figura1 = 'Sota';
        } else if (valor1 == 8) {
            figura1 = 'Caballo';
        } else {
            figura1 = 'Rey'
        }
    }
    if (valor2 > 7)
        if (valor2 == 7) {
            figura2 = 'Sota';
        } else if (valor2 == 8) {
            figura2 = 'Caballo';
        } else {
            figura2 = 'Rey'
        }
}

/// DEFINE EL STRING CON EL VALOR DE LA CARTA DE CADA JUGADOR
if (palo1 == 1) {
    cartaComputadora = figura1 + " de espada";
} else if (palo1 == 2) {
    cartaComputadora = figura1 + " de basto";
} else if (palo1 == 3) {
    cartaComputadora = figura1 + " de copa";
} else {
    cartaComputadora = figura1 + " de oro";
}

cartaJugador = figura2 + " de " + palo2;



// SALEN CARTAS IGUALES || INVALIDO
if (cartaComputadora == cartaJugador) {
    ganador = 'Salieron cartas iguales'


    // ALGÚN DATO INCORRECTO
} else if (valor2 > 10 || (palo2 != "copa" && palo2 != "basto" && palo2 != "oro" && palo2 != "espada")) {
    alert("Se ingresaron datos erróneos");

    // CARTAS DISTINTAS || SIGUE JUEGO
} else {

    /// ANCHOS BUENOS
    // AS ESPADA
    if ((valor1 == 1 && palo1 == "espada") || (valor2 == 1 && palo2 == "espada")) {
        if (valor1 == 1 && palo1 == "espada") {
            ganador = 'perdiste!';

        } else {
            ganador = 'ganaste!';

        }


        // AS BASTO
    } else if ((valor1 == 1 && palo1 == "basto") || (valor2 == 1 && palo2 == "basto")) {
        if (valor1 == 1 && palo1 == "basto") {
            ganador = 'perdiste!';

        } else {
            ganador = 'ganaste!';
        }



        /// SIETES BUENOS
        // SIETE ESPADA
    } else if ((valor1 == 7 && palo1 == "espada") || (valor2 == 7 && palo2 == "espada")) {
        if (valor1 == 7 && palo1 == "espada") {
            ganador = 'perdiste!';
        } else {
            ganador = 'ganaste!';
        }


        // SIETE ORO
    } else if ((valor1 == 7 && palo1 == "oro") || (valor2 == 7 && palo2 == "oro")) {
        if (valor1 == 7 && palo1 == "oro") {
            ganador = 'perdiste!';
        } else {
            ganador = 'ganaste!';
        }


        /// TRES, DOS, ANCHOS FALSOS
        // AMBOS JUGADORES 1, 2 o 3
    } else if ((valor1 >= 1 && valor1 <= 3) && ((valor2 >= 1 && valor2 <= 3))) {
        if (valor1 > valor2) {
            ganador = 'perdiste!';
        } else if (valor1 == valor2) {
            ganador = 'EMPATE!';
        } else {
            ganador = 'ganaste!';
        }



        // COMPUTADORA 1,2,3 || jugador > 3
    } else if ((valor1 >= 1 && valor1 <= 3) && ((valor2 > 3))) {
        ganador = 'perdiste!';




        // COMPUTADORA > 3 || jugador 1,2,3
    } else if ((valor2 >= 1 && valor2 <= 3) && ((valor1 > 3))) {
        ganador = 'ganaste!';


        // TODAS cartas bajas
    } else {
        if (valor1 > valor2) {
            ganador = 'perdiste!';
        } else if (valor1 == valor2) {
            ganador = 'EMPATE!';
        } else {
            ganador = 'ganaste!';
        }
    }

    /// MENSAJE FINAL
    alert(`Has elegido: ${cartaJugador}
Computadora eligió: ${cartaComputadora}
${ganador}`);
}

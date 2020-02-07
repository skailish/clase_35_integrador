// Simón dice

// Crear un programa que muestre una secuencia de 5 nombres de colores en orden aleatorio.Los colores posibles son 4: rojo, verde, azul y amarillo.Pedir luego ingresar 5 colores uno por uno, y mostrar al finalizar si acertó la secuencia.
// // Ejemplo
// Simón dice: rojo, rojo, azul, verde, amarillo.

// Ingrese el primer color: rojo
// Ingrese el primer color: rojo
// Ingrese el primer color: azul
// Ingrese el primer color: verde
// Ingrese el primer color: amarillo

// Felicitaciones! Has ganado!

let simon1 = Math.round(Math.random() * 3);
let simon2 = Math.round(Math.random() * 3);
let simon3 = Math.round(Math.random() * 3);
let simon4 = Math.round(Math.random() * 3);
let simon5 = Math.round(Math.random() * 3);

let player1 = "";
let player2 = "";
let player3 = "";
let player4 = "";
let player5 = "";

// DEFINE COLORES
// COLOR 1
if (simon1 < 1) {
    simon1 = "rojo";
} else if (simon1 < 2) {

    simon1 = "verde";
} else if (simon1 < 3) {

    simon1 = "azul";
} else if (simon1 < 4) {

    simon1 = "amarillo";
}

// COLOR 2
if (simon2 < 1) {
    simon2 = "rojo";
} else if (simon2 < 2) {

    simon2 = "verde";
} else if (simon2 < 3) {

    simon2 = "azul";
} else if (simon2 < 4) {

    simon2 = "amarillo";
}


// COLOR 3
if (simon3 < 1) {
    simon3 = "rojo";
} else if (simon3 < 2) {

    simon3 = "verde";
} else if (simon3 < 3) {

    simon3 = "azul";
} else if (simon3 < 4) {

    simon3 = "amarillo";
}


// COLOR 4
if (simon4 < 1) {
    simon4 = "rojo";
} else if (simon4 < 2) {

    simon4 = "verde";
} else if (simon4 < 3) {

    simon4 = "azul";
} else if (simon4 < 4) {

    simon4 = "amarillo";
}


// COLOR 5
if (simon5 < 1) {
    simon5 = "rojo";
} else if (simon5 < 2) {

    simon5 = "verde";
} else if (simon5 < 3) {

    simon5 = "azul";
} else if (simon5 < 4) {
    simon5 = "amarillo";
}

alert(`Simón Dice: 
${simon1}, ${simon2}, ${simon3}, ${simon4}, ${simon5}`)

player1 = prompt("Ingrese el color 1");
player2 = prompt("Ingrese el color 2");
player3 = prompt("Ingrese el color 3");
player4 = prompt("Ingrese el color 4");
player5 = prompt("Ingrese el color 5");


/// GANÓ
if (simon1 == player1 && simon2 == player2 && simon3 == player3 && simon4 == player4 && simon5 == player5) {
    alert(`Simón Dice: 
${simon1} ${simon2} ${simon3} ${simon4} ${simon5}
Jugador dice:
${player1}  ${player2}  ${player3}  ${player4} ${player5}
GANASTE!`);

    // PERDIÓ
} else {
    alert(`Simón Dice: 
${simon1} ${simon2} ${simon3} ${simon4} ${simon5}
Jugador dice:
${player1}  ${player2}  ${player3}  ${player4} ${player5}
PERDISTE!`)
}
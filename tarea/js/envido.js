// Envido

// Crear un programa que permita ingresar 3 cartas de truco(mazo español, sin ochos y nueves) una por una, ingresando número y palo por separado, y mostrar luego si se tiene puntos para hacer envido o no, y cuántos.Las reglas para el mismo son:
// Si se tiene dos cartas del mismo palo, de las cuales una(A) es un 10, un 11 o un 12, y la otra(B) un número distinto, los puntos de envido son: 20 + el número de la carta(B)
// Si se tienen dos cartas del mismo palo, de las cuales ambas son cualquiera de los siguientes números: 10, 11 o 12(no hace falta que sean iguales), los puntos de envido son 20.
// Si se tienen dos cartas del mismo palo, y ninguna de ellas es un 10, un 11, o un 12, los puntos de envido son la suma de ambas cartas + 20
// // Por ejemplo
// Ingrese número primera carta: 7
// Ingrese palo primera carta: espada

// Ingrese número segunda carta: 4
// Ingrese palo segunda carta: copa

// Ingrese número tercera carta: 3
// Ingrese palo tercera carta: espada

// Sus puntos de envido son: 30

let carta1 = Number(prompt("Ingrese el número de su primer carta"));
const palo1 = prompt("Ingrese el palo de su primer carta");

let carta2 = Number(prompt("Ingrese el número de su segunda carta"));
const palo2 = prompt("Ingrese el palo de su segunda carta");

let carta3 = Number(prompt("Ingrese el número de su tercer carta"));
const palo3 = prompt("Ingrese el palo de su tercer carta");



// todos los palos distintos
if (palo1 != palo2 && palo1 != palo3 && palo2 != palo3) {

    alert("No tiene puntos de envido"); // END

} else { // dos o más palos iguales


    // 2 o más palos iguales, TODAS las cartas mayores o iguales a 10 
    // 2 palos iguales 1 distinto - ambos >= 10 
    if ((carta1 >= 10 && carta2 >= 10 && carta3 >= 10) ||
        ((palo1 == palo2 && palo1 != palo3) && (carta1 >= 10 && carta2 >= 10)) ||
        ((palo2 == palo3 && palo2 != palo1) && (carta2 >= 10 && carta3 >= 10)) ||
        ((palo1 == palo3) && (palo1 != palo2) && (carta1 >= 10 && carta3 >= 10))) {

        alert("Tiene 20 de envido");// END
    }
    // 2 o más palos iguales, ALGUNA carta inferior a 10
    else {

        // si alguna es mayor o igual a 10, correr este script
        if (carta1 >= 10 || carta2 >= 10 || carta3 >= 10) {
            if (carta1 >= 10) { // convierto el valor1 a 0 si es 10, 11 o 12
                carta1 = 0;
            }

            if (carta2 >= 10) { // convierto el valor2 a 0 si es 10, 11 o 12
                carta2 = 0;
            }

            if (carta3 >= 10) { // convierto el valor3 a 0 si es 10, 11 o 12
                carta3 = 0;
            }
        }

        envido = (carta1 + carta2 + carta3) + 20; // suma total cartas con valor => 10 actualizado a 0



        // todos los palos iguales // TO END
        if (palo1 == palo2 && palo1 == palo3) {
            if (carta1 < carta2 && carta1 < carta3 && carta1 != 0) { // si el 1 es menor, lo resta, si no es 10,11,12

                envido -= carta1;

            } else if (carta2 < carta1 && carta2 < carta3 && carta2 != 0) { // si el 2 es menor, lo resta, si no es 10,11,12

                envido -= carta2;

            } else { // (carta3 < carta2 && palo3 < carta1 && carta3 != 0) { // si el 3 es menor, lo resta, si no es 10,11,12

                envido -= carta3;

            }


        } else { // 2 palos iguales, uno distinto // TO END


            if (palo1 == palo2 && palo1 != palo3) { // palo 3 distinto

                envido -= carta3;

            } else if (palo1 == palo3 && palo1 != palo2) { // palo 2 distinto

                envido -= carta2;

            } else { // palo3 distinto

                envido -= carta3;

            }
        }

        // END
        alert(`Tiene ${envido} de envido`);
    }
}


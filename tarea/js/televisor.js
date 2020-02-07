// Televisor

// Hacer un programa que empiece preguntando si se desea prender el televisor.Si elige que no, el programa debe terminar.Si elige que sí, debe mostrar un mensaje con el canal actual y el el nivel de volumen de un televisor, y debe permitir realizar las siguientes operaciones:

// CAMBIAR CANAL: permite ingresar un canal(0 al 99)
// CANAL SIGUIENTE: sube un canal
// CANAL ANTERIOR: baja un canal
// SUBIR VOLUMEN: sube en volumen en 5
// BAJAR VOLUMEN: disminuye en volumen en 5
// MUTEAR: pone el volumen en 0
// Una vez elegida la opción e ingresado el valor si corresponde, debe mostrar un mensaje con el canal y el nivel del volumen actual.

let tvON = "";
let volume = 15;
let channel = 2;
let option = 0;

tvON = confirm("¿Desea encender el televisor?");

if (tvON) { // ENCIENDE TV
    option = prompt(`
    La TV está encendida.
    Canal: ${channel}
    Volúmen: ${volume}
    
    Elija una opción:
    1 CAMBIAR CANAL: permite ingresar un canal(0 al 99)
    2 CANAL SIGUIENTE: sube un canal
    3 CANAL ANTERIOR: baja un canal
    4 SUBIR VOLUMEN: sube en volumen en 5
    5 BAJAR VOLUMEN: disminuye en volumen en 5
    6 MUTEAR: pone el volumen en 0`)

    if (option == 1) { // CAMBIAR CANAL

        channel = prompt("Elija el canal");

        prompt(`Canal: ${channel}
    Volúmen: ${volume}`)


    } else if (option == 2) { // CANAL SIGUIENTE

        channel += 1;

        alert(`Canal: ${channel}
    Volúmen: ${volume}`)


    } else if (option == 3) { // CANAL ANTERIOR


        channel -= 1;

        alert(`Canal: ${channel}
    Volúmen: ${volume}`)

    } else if (option == 4) { // SUBIR VOLUMEN


        volume += 5;

        alert(`Canal: ${channel}
    Volúmen: ${volume}`)

    } else if (option == 5) { // BAJAR VOLUMEN


        volume -= 5;

        alert(`Canal: ${channel}
    Volúmen: ${volume}`)

    } else if (option == 6) { // MUTEAR

        alert(`Canal: ${channel}
    Volúmen: Silenciado`)

    } else { // VALOR INCORRECTO

        alert("No ha ingresado una opción correcta");

    }

} else {
    alert("Adios"); // END
}
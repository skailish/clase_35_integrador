// ATM

// Crear un programa que permita hacer las siguientes operaciones: EXTRAER, DEPOSITAR, TRANSFERIR, CAMBIAR PIN, SALIR.
// El programa debe tener un dinero inicial
// El programa debe tener una contraseña inicial
// Para empezar a utilizarlo y llegar al menú de opciones, debe mostrar pedir ingresar el PIN(hardcodeado)
// EXTRAER debe pedir cuánto se desea extraer y mostrar luego el dinero restante, sólo si la extracción es menor al dinero disponible
// DEPOSITAR debe pedir cuánto se desea ingresar y mostrar luego el dinero resultante
// TRANSFERIR debe pedir por un CBU(o alias) a transferir, preguntar cuánto se desea transferir y mostrar el dinero restante, si la transferencia es menor al dinero disponible y si el CBU es válido.Los CBU o alias válidos posibles deben estar hardcodeados.
// CAMBIAR PIN debe pedir primero por la contraseña nueva y luego por la contraseña original para confirmar el cambio
// SALIR debe mostrar un mensaje de despedida
// En cualquier situación mostrar mensajes de lo que esté pasando, ya sean errores o operaciones exitosas

let inAccount = 5000;
let password = "123";
let passwordCheck = "";
let newPassword = "";
let CBU1 = "cbu01234";
let CBU2 = "cbu56789";
let transferAmount = 0;
let withdrawalAmount = 0;
let depositAmount = 0;
let chosenCbu = "";
let option = "";
let messageOptions = '\nElija una opción: \nElija 1 para extraer \nElija 2 para depositar \nElija 3 para trasnferir\nElija 4 para cambiar su pin\nElija 5 para salir'

passwordCheck = prompt("Bienvenidx a su banco. Ingrese su contraseña");

if (passwordCheck == password) {// CONTRASEÑA CORRECTA

    option = prompt(messageOptions); // MENSAJE CON OPCIONES

    if (option == 1) { // EXTRAER

        withdrawalAmount = Number(prompt("¿Cuánto dinero desea extraer?"));
        inAccount -= withdrawalAmount;


        if (withdrawalAmount <= inAccount) { // ALCANZA EL DINERO
            alert(`Éxito.
            Ha extraído $${withdrawalAmount}       
            El dinero en su cuenta es ahora $${inAccount}`); // END

        } else { // NO ALCANZA EL DINERO
            alert("No hay saldo suficiente"); // END
        }



    } else if (option == 2) { // DEPOSITAR

        depositAmount = Number(prompt("¿Cuánto dinero desea depositar?"));
        inAccount += depositAmount;

        alert(`Éxito. 
        Ha depositado $${depositAmount}
        El dinero en su cuenta es ahora $${inAccount}`); // END



    } else if (option == 3) { // TRANSFERIR

        transferAmount = Number(prompt("¿Cuánto dinero desea transferir?"));
        chosenCbu = prompt("Escriba el número de CBU");

        if (transferAmount <= inAccount) { // ALCANZA EL DINERO

            if (chosenCbu == CBU1 || chosenCbu == CBU2) { // CBU CORRECTO

                inAccount -= transferAmount;

                alert(`Éxito.
                    Ha transferido $${transferAmount} al CBU ${chosenCBU}
                    El dinero en su cuenta es ahora $${inAccount}`); // END

            } else { // CBU INCORRECTO || END
                alert("No ha ingresado un CBU válido");
            }

        } else { // NO ALCANZA EL DINERO
            alert("No hay saldo suficiente"); // END
        }



    } else if (option == 4) { // CAMBIAR PIN

        newPassword = prompt("Elija una nueva contraseña");
        passwordCheck = prompt("Escriba su contraseña antigua para continuar");

        if (passwordCheck == password) { // validación correcta

            password = newPassword;
            alert(`Su contraseña ha sido modificada con éxito
            Su contraseña actual es ${password}`); // END


        } else { // contraseña incorrecta

            alert("No ha igresado correctamente su contraseña antigua");

        }


    } else if (option == 5) { // SALIR

        alert("Gracias por utilizar nuestros servicios.") // END

    } else { // OPCION INCORRECTA || END
        alert("No ha ingresado una opción válida");
    }


} else { // CONTRASEÑA INCORRECTA || END
    alert("No ha igresado una contraseña correcta");
}
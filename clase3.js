/*
Desarrollar un sistemita de cajero automático
utilizar prompt , verificar la clave correcta
para mostrar un menu:
1. consulta saldo
2. depósito
3.retiro
4. transferencia , etc
utilizar el dom para colocar los mensajes
variables a usar:
clave, saldo, opción, monto
*/
var clave, saldo = 300, opcion, monto, claveCo = 123;
var div = document.querySelector("div");  //selecciona una etiqueta, en este caso div del html
clave = parseInt(window.prompt("Bienvenido al Banco Nación. Escriba la clave de cajero: "));
if (clave == claveCo) {
    //mostrar el menú
    opcion = parseInt(window.prompt("Escriba un número opción: \n1 saldo, \n2 depósito, \n3 retiro, \n4 transferencia.")); //el \n es el salto de linea para que quede más lindo
    switch(opcion) {
        case 1:
            div.innerHTML = "Tu saldo actual es: " + saldo;
            break;
        case 2:
            monto = parseInt(window.prompt("Escriba el monto a depositar: "));
            saldo += monto; // saldo = saldo + monto
            div.innerHTML = "Depósito realizado correctamente, tu saldo actual es " + saldo;
            break;
        case 3:
            monto = parseInt(window.prompt("Escriba el monto a retirar: "));
            if (monto < saldo){
                saldo -= monto; // saldo = saldo - monto
                div.innerHTML = "Retiro realizado correctamente. Su saldo actual es " + saldo;
            } else {
                div.innerHTML = "Saldo insuficiente.";
            }
            break;
        default:
            div.innerHTML = "Opción inválida";
            break;
    }

} else {
    //error, clave incorrecta
    div.innerHTML = "Datos de acceso incorrectos.";
}


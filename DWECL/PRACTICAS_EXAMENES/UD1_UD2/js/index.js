let ventanaSecundario;
let contador;
let tiempoContador = 10; //Tiempo en segundos para cerrar automaticamente

//Funcion para validar la frase
function fraseValida(frase) {
    for (i = 0; i < frase.length; i++) {
        const char = frase.charAt(i);
        const codigoAscii = char.charAt(0);

        //comprobamos si es una letra o un espacion en blanco
        if (!((codigoAscii >= 65 && codigoAscii <= 90) ||
            (codigoAscii >= 97 && codigoAscii <= 122) ||
            (codigoAscii === 32))) {
            return false; //Si hay caracter no valido devolvemos falso.
        }

    }
    return true;
}

//Funcion para abrir la ventana secundaria

function abrirVentanaSecundaria(frase){
    const ventana = window.open("","","width=400","height=500");

    const palabras = [];
    let palabraActual="";
    for(let i=0; i< frase.length; i++){
        const char = frase.charAt(i);
        if(char !== ""){
                palabraActual += char;
        }
        else if(palabraActual){
            palabras.push(palabraActual);
            palabraActual="";

        }
    }
    
}

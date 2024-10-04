// Función para comprobar si la contraseña es fuerte o débil
function esContraseñaFuerte(contraseña) {
    let mayusculas = 0;
    let minusculas = 0;
    let numeros = 0;
    let otrosCaracteres = 0;

    // Iterar sobre cada carácter de la contraseña
    for (let i = 0; i < contraseña.length; i++) {
        let char = contraseña[i];

        // Comprobar si es una letra minúscula
        if (char >= 'a' && char <= 'z') {
            minusculas++;
        } 
        // Comprobar si es una letra mayúscula
        else if (char >= 'A' && char <= 'Z') {
            mayusculas++;
        } 
        // Comprobar si es un número
        else if (char >= '0' && char <= '9') {
            numeros++;
        } 
        // Si no es ni mayúscula, ni minúscula ni número, es otro tipo de carácter
        else {
            otrosCaracteres++;
        }
    }

    // Evaluar las condiciones para que la contraseña sea fuerte
    if (mayusculas >= 2 && minusculas >= 1 && numeros >= 1 && otrosCaracteres >= 2) {
        return true;
    } else {
        return false;
    }
}

// Función para solicitar y validar la contraseña
function solicitarContraseña() {
    let contraseña = prompt("Introduce una contraseña (entre 8 y 16 caracteres):");

    while (contraseña.length < 8 || contraseña.length > 16) {
        contraseña = prompt("La longitud de la contraseña debe estar entre 8 y 16 caracteres. Inténtalo de nuevo:");
    }

    // Comprobamos si la contraseña es fuerte o débil
    let resultado = document.getElementById("resultado");
    
    if (esContraseñaFuerte(contraseña)) {
        resultado.textContent = "La contraseña es FUERTE.";
    } else {
        resultado.textContent = "La contraseña es DÉBIL.";
    }
}

// Llamada a la función para iniciar el proceso
solicitarContraseña();

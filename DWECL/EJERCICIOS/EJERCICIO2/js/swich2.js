// Versión con switch

// Solicita la edad del usuario
let edad = prompt("Introduce tu edad:");

// Convierte el valor ingresado en número
edad = Number(edad);

// Verifica si el valor es un número
if (isNaN(edad)) {
    console.log("Error, debe ser un número");
} else {
    // Usamos switch para verificar los distintos rangos de edad
    switch (true) {
        case (edad < 18):
            console.log("Eres menor de edad");
            break;
        case (edad > 18 && edad <= 30):
            console.log("Eres muy joven");
            break;
        case (edad > 30 && edad <= 60):
            console.log("Eres una persona adulta");
            break;
        case (edad > 60):
            console.log("Eres una persona adulta mayor");
            break;
        default:
            console.log("Error, edad fuera de rango");
            break;
    }
}
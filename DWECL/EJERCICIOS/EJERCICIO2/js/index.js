// Versión con if

// Solicita la edad del usuario
let edad = prompt("Introduce tu edad:");

// Convierte el valor ingresado en número
edad = Number(edad);

// Verifica si el valor es un número
if (isNaN(edad)) {
    console.log("Error, debe ser un número");
} else {
    // Verifica los distintos rangos de edad usando if
    if (edad < 18) {
        console.log("Eres menor de edad");
    } else if  (edad <= 30) {
        console.log("Eres muy joven");
    } else if (edad <= 60) {
        console.log("Eres una persona adulta");
    } else if (edad >= 60) {
        console.log("Eres una persona adulta mayor");
    } 
}

// Versión con do while

// Inicializamos el número en 100
let numero = 100;

console.log("Números impares que no son múltiplos de 3 ni de 7 (do while):");

do {
    // Comprobamos si el número es impar y no es múltiplo de 3 ni de 7
    if (numero % 2 !== 0 && numero % 3 !== 0 && numero % 7 !== 0) {
        console.log(numero);
    }
    // Decrementamos el número en 1 para seguir el bucle
    numero--;
} while (numero >= 1);
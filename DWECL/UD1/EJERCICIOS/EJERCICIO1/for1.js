// Versión con for

console.log("Números impares que no son múltiplos de 3 ni de 7 (for):");

for (let numero = 100; numero >= 1; numero--) {
    // Comprobamos si el número es impar y no es múltiplo de 3 ni de 7
    if (numero % 2 !== 0 && numero % 3 !== 0 && numero % 7 !== 0) {
        console.log(numero);
    }
}
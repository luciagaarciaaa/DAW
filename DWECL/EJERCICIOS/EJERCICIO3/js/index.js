  // Aquí va el código JavaScript
  window.onload = function() {
    let opcion; // Variable para almacenar la opción del usuario

    // Bucle infinito hasta que el usuario elija la opción 4 para salir
    while (true) {
        // Mostrar el menú de opciones
        opcion = prompt(
            "Elige una opción:\n" +
            "1. Sumar dos números\n" +
            "2. Restar dos números\n" +
            "3. Multiplicar dos números\n" +
            "4. Salir"
        );

        // Convertir la opción a número
        opcion = Number(opcion);

        // Verificar si la opción está dentro del rango válido
        if (isNaN(opcion) || opcion < 1 || opcion > 4) {
            alert("Error: Opción no válida. Por favor, elige una opción entre 1 y 4.");
            continue; // Volver a mostrar el menú si la opción no es válida
        }

        // Opción 4: salir del programa
        if (opcion === 4) {
            console.log("Fin del ejercicio.");
            break; // Salir del bucle y finalizar el programa
        }

        // Solicitar los números para las operaciones si la opción es válida
        let num1 = Number(prompt("Introduce el primer número:"));
        let num2 = Number(prompt("Introduce el segundo número:"));

        // Verificar si los números son válidos
        if (isNaN(num1) || isNaN(num2)) {
            alert("Error: Uno o ambos valores no son números válidos.");
            continue; // Volver a pedir los números si son inválidos
        }

        // Realizar la operación correspondiente según la opción seleccionada
        switch (opcion) {
            case 1:
                console.log(`El resultado de la suma es: ${num1 + num2}`);
                break;
            case 2:
                console.log(`El resultado de la resta es: ${num1 - num2}`);
                break;
            case 3:
                console.log(`El resultado de la multiplicación es: ${num1 * num2}`);
                break;
        }
    }
}

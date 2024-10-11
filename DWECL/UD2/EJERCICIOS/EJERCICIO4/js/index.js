let victorias = 0;
let derrotas = 0;

// Función para generar dos números aleatorios distintos entre 1 y 100
function generarNumeros() {
    let A, B;
    do {
        A = Math.floor(Math.random() * 100) + 1; // Genera número entre 1 y 100
        B = Math.floor(Math.random() * 100) + 1;
    } while (A === B); // Repetir si los números son iguales
    return { A, B };
}

// Función principal del juego
function jugar() {
    // Generamos los números A y B
    let { A, B } = generarNumeros();
    
    // Preguntamos al usuario por su apuesta (A o B)
    let apuesta = prompt("¿Por quién apuestas, A o B? (gana el número más alto)").toUpperCase();

    // Validar si la entrada es "A" o "B"
    while (apuesta !== "A" && apuesta !== "B") {
        apuesta = prompt("Entrada no válida. Debes apostar por 'A' o 'B'.").toUpperCase();
    }

    // Mostramos los valores de A y B
    let mensaje = `El valor de A es ${A} y el valor de B es ${B}. `;
    let ganador = A > B ? "A" : "B";
    
    // Comprobamos si la apuesta fue correcta
    if (apuesta === ganador) {
        victorias++;
        mensaje += "¡Has ganado la apuesta!";
    } else {
        derrotas++;
        mensaje += "Lo siento, has perdido.";
    }

    // Mostrar resultados en la página
    mensaje += `<br>Partidas ganadas: ${victorias}, partidas perdidas: ${derrotas}.`;
    document.getElementById("mensaje").innerHTML = mensaje;

    // Preguntamos si quiere jugar de nuevo
    let jugarOtraVez = confirm("¿Quieres jugar otra vez?");
    if (jugarOtraVez) {
        jugar();
    }
}

// Evento para jugar al hacer clic en el botón "Jugar de nuevo"
document.getElementById("jugarDeNuevo").addEventListener("click", jugar);

const audio = document.getElementById('audio');
const letrasDiv = document.getElementById('letras');

// Array con las letras de la canción, divididas en líneas y sincronizadas con los tiempos
const letras = [
    { tiempo: 0, texto: "Primera línea de la letra" },
    { tiempo: 5, texto: "Segunda línea de la letra" },
    // ... más líneas
];

// Función para actualizar las letras
function actualizarLetras() {
    let tiempoActual = audio.currentTime;
    letrasDiv.textContent = ''; // Limpiamos el div antes de agregar nuevas letras

    letras.forEach(linea => {
        if (tiempoActual >= linea.tiempo) {
            letrasDiv.textContent += linea.texto + '\n';
        }
    });
}

audio.addEventListener('timeupdate', actualizarLetras);
audio.play();

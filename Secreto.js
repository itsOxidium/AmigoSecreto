// =============================================
// VARIABLES GLOBALES
// =============================================
let listaParticipantes = [];       // Almacena todos los participantes registrados
let participantesSorteados = [];   // Registra los participantes ya sorteados
let ganadorSorteo = null;          // Almacena temporalmente al ganador del sorteo actual

// =============================================
// FUNCIÓN: Agregar participante a la lista
// =============================================
function agregarParticipante() {
    // Obtener nombre del input y definir regex para validación
    let nombreParticipante = document.querySelector('input').value;
    let regex = /^[a-zA-Z\s]+$/;  // Permite letras y espacios

    // Validaciones en cascada con mensajes de error específicos
    if (nombreParticipante === '') {
        alert('Por favor ingresa un nombre');
    }
    else if (listaParticipantes.includes(nombreParticipante)) {
        alert('Nombre duplicado: por favor ingresa uno diferente');
    }
    else if (!regex.test(nombreParticipante)) {
        alert('Caracteres inválidos: solo se permiten letras y espacios');
    }
    else {
        // Si pasa todas las validaciones, agregar a la lista
        listaParticipantes.push(nombreParticipante);
    }

    // Limpiar campo y actualizar visualización
    limpiarCampo('amigo');
    mostrarListaParticipantes();
}

// =============================================
// FUNCIÓN: Mostrar lista actual de participantes
// =============================================
function mostrarListaParticipantes() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';  // Limpiar lista antes de actualizar

    // Construir lista dinámicamente para mejor rendimiento
    listaParticipantes.forEach(participante => {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = participante;
        listaAmigos.appendChild(elementoLista);
    });
}

// =============================================
// FUNCIÓN: Lógica principal del sorteo
// =============================================
function realizarSorteo() {
    let resultadoSorteo = document.getElementById('resultado');
    resultadoSorteo.innerHTML = '';  // Limpiar resultados anteriores

    // Validación de lista vacía (mejorada: chequea longitud del array)
    if (listaParticipantes.length === 0) {
        alert('Debes ingresar participantes primero');
        return;
    }

    // Generar primer candidato aleatorio
    ganadorSorteo = listaParticipantes[generarNumeroAleatorio()];

    // Manejo de sorteos completos
    if (listaParticipantes.length === participantesSorteados.length) {
        alert('¡Todos han sido sorteados! Reiniciando sistema...');
        reiniciarSorteo();
        return;
    }

    // Evitar repeticiones con loop controlado
    while (participantesSorteados.includes(ganadorSorteo)) {
        ganadorSorteo = listaParticipantes[generarNumeroAleatorio()];
    }

    // Mostrar resultado y registrar en históricos
    let mensajeGanador = `¡El ganador es: ${ganadorSorteo}! 🎉`;
    let elementoLista = document.createElement('li');
    elementoLista.textContent = mensajeGanador;
    resultadoSorteo.appendChild(elementoLista);
    participantesSorteados.push(ganadorSorteo);

    // Ocultar lista original después del sorteo (comportamiento heredado)
    document.getElementById('listaAmigos').innerHTML = '';
}

// =============================================
// FUNCIÓN: Generador de índice aleatorio
// =============================================
function generarNumeroAleatorio() {
    // Math.random() genera entre 0 (inclusive) y 1 (exclusivo)
    // Multiplicamos por longitud para obtener índice válido
    return Math.floor(Math.random() * listaParticipantes.length);
}

// =============================================
// FUNCIÓN: Reinicio completo del sistema
// =============================================
function reiniciarSorteo() {
    // Vaciar arrays y limpiar UI
    listaParticipantes = [];
    participantesSorteados = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}

// =============================================
// FUNCIÓN UTILITARIA: Limpiar campos de entrada
// =============================================
function limpiarCampo(elemento) {
    // Limpia cualquier campo por ID
    document.getElementById(elemento).value = '';
}
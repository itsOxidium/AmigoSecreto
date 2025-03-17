## 🎁 Sorteo de Amigo Secreto

Este proyecto en **JavaScript** permite gestionar un sorteo de **Amigo Secreto** en una página web. Los usuarios pueden agregar nombres, ver la lista de participantes y realizar un sorteo aleatorio sin repetir nombres. 

## 🚀 Funcionalidades

- **Registrar Participantes**: Agrega nombres validando formato y evitando duplicados
- **Visualizar Lista**: Muestra participantes registrados en tiempo real
- **Realizar Sorteo**: Selección aleatoria con control de repeticiones
- **Reinicio Completo**: Limpia todos los datos del sistema

---

## 📌 Instalación y Uso

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/sorteo-amigo-secreto.git
2. Abre index.html en tu navegador
3. Interactúa con la interfaz para gestionar el sorteo

## 📝 Código Principal
Variables Globales
let listaParticipantes = [];       // Almacena todos los participantes registrados
let participantesSorteados = [];  // Histórico de ganadores del sorteo
let ganadorSorteo = null;         // Almacena temporalmente al ganador actual
Funciones Clave
agregarParticipante() → Valida y registra nuevos participantes
mostrarListaParticipantes() → Actualiza la visualización de participantes
realizarSorteo() → Ejecuta el algoritmo de selección aleatoria
reiniciarSorteo() → Restablece todo el sistema a valores iniciales

##  🔍 Estructura del Código
Función	Responsabilidad
generarNumeroAleatorio()	Genera índices aleatorios para el sorteo
limpiarCampo()	Gestiona la limpieza de campos de entrada
validarNombre()	Implementa regex para formato de nombres

##  ♻️ Flujo de Trabajo
Usuario ingresa nombre → Validación triple (vacío, duplicado, formato)
Nombre aceptado → Se añade a listaParticipantes
Al realizar sorteo → Selección aleatoria con verificación en participantesSorteados
Sorteo completo → Sistema notifica y permite reinicio

##  ✅ Mejoras Implementadas
Nomenclatura descriptiva en español
Validación de array vacío usando length
Eliminación de returns redundantes
Optimización de bucles con forEach
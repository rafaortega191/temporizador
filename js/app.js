// Variables globales
let temporizador;
let tiempoInicial = 0;
let tiempoRestante = 0;
let isRunning = false;

// Función para actualizar el temporizador
function actualizarTemporizador() {
  tiempoRestante--;
  if (tiempoRestante <= 0) {
    clearInterval(temporizador);
    isRunning = false;
    document.getElementById('temporizador').textContent = '00:00';
    return;
  }

  let minutos = Math.floor(tiempoRestante / 60);
  let segundos = tiempoRestante % 60;
  document.getElementById('temporizador').textContent = (minutos < 10 ? '0' : '') + minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
}

// Evento click en el botón "Iniciar"
document.getElementById('btnIniciar').addEventListener('click', function() {
  if (!isRunning) {
    tiempoInicial = parseInt(document.getElementById('inputTiempo').value);
    tiempoRestante = tiempoInicial;
    temporizador = setInterval(actualizarTemporizador, 1000);
    isRunning = true;
  }
});

// Evento click en el botón "Pausar"


  document.getElementById('btnPausar').addEventListener('click', () => {
    if (isRunning) {
      clearInterval(temporizador);
      isRunning = false;
    }
  });

  // Evento click en el botón "Reset"
  document.getElementById('btnReset').addEventListener('click', () => {
    clearInterval(temporizador);
    isRunning = false;
    document.getElementById('temporizador').textContent = '00:00';
  });
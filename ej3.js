// defino valor máximo seguro que puede manejar JavaScript (9007199254740991). Uso constante pq no va a cambiar
const MAX_SEGURO = Number.MAX_SAFE_INTEGER;     // uso Number. pq localStore es tipo texto

// compruebo si hay un valor guardado en localStorage para seguir aumentando el contador; si existe, lo recupero
let contador = localStorage.getItem("contadorClicks");  //"contadorClicks" es la clave que uso para guardar el valor

// si no existe (click por primera vez), lo inicializo a 0
if (contador === null) {
  contador = 0;
} else {
  // convierto el valor guardado (string, localStorage es siempre texto) a número
  contador = Number(contador);
}

// muestro valor actual en pantalla
const mostrar = document.getElementById("contador");
mostrar.textContent = contador;

// al hacer click al botón:
document.getElementById("boton").addEventListener("click", () => {
  // Si ya llegamos al límite máximo seguro
  if (contador >= MAX_SEGURO) {
    alert("Ya no se pueden realizar más clicks");
    return; // se detiene el contador
  }

  // aumento del contador
  contador++;

  // actualizo el texto en la pantalla
  mostrar.textContent = contador;

  // guardo el nuevo valor en localStorage
  localStorage.setItem("contadorClicks", contador);
});

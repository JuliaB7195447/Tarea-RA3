let segundos = 3; // valor inicial por donde empiezo cuenta atras
    const contador = document.getElementById("contador");
    contador.textContent = segundos;

    // para actualizar el texto cada segundo
    const intervalo = setInterval(() => {
    segundos--;
    contador.textContent = segundos;

        if (segundos === 0) {
            clearInterval(intervalo); // detiene cuenta atras
        }
    }, 1000);

    // redirige a los 3 segundos
    setTimeout(() => {
        window.location.href = "https://cifpcarlos3.es/es"; // URL a la que se redirige
    }, 3000); // 3000 milisegundos = 3 segundos
//click del botón id="transformacion"
document.getElementById("transformacion").addEventListener("click", () => {
    const entrada = document.getElementById("entrada").value;    //usamos .value para sacar el texto, no todo el input
    const salida = document.getElementById("salida");

//comprobación que no hay números
    for(let i=0; i<entrada.length; i++){
        let caracter = entrada.charAt(i);
            if(caracter>="0" && caracter <="9"){
                alert('Prohibido introducir números');
                document.getElementById("entrada").value = "";      //limpia el imput con entrada con numero
                document.getElementById("entrada").focus();         //deja el cursor en imput de entrada
                return;
            }
    }

//sustituri espacios por ?
let texto = "";

for(let j=0; j<entrada.length; j++){
    if(entrada.charAt(j)=== " "){
        texto = texto + "?";
    }else{
        texto = texto + entrada.charAt(j);
    }
}

//contar repeticiones
let resultado = "";
let contador = 1;

for (let k = 0; k < texto.length; k++) {        //aqui ya la entrada se sustituye por el texto, pq es ya l aque tiene incluido "?"
  if (texto.charAt(k) === texto.charAt(k + 1)) {
    contador++;
  } else {
    if (contador > 1) {
      resultado = resultado + contador + texto.charAt(k);
    } else {
      resultado = resultado + texto.charAt(k);
    }
    contador = 1;
  }
}

//mostrando resultado
salida.value = resultado;
});

// click del botón id="clear"
document.getElementById("clear").addEventListener("click", () => {
  // limpiar ambos campos
  document.getElementById("entrada").value = "";
  document.getElementById("salida").value = "";

  // devolver el foco al campo de entrada
  document.getElementById("entrada").focus();
});
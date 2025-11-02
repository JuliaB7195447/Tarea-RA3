Tarea para DWEC03.
Enunciado.
1.  Crea la siguiente aplicación JavaScript: Una página con un botón que al hacer click abre una ventana de tamaño 600 X 400, en la ventana se escribirá la frase "Hoy es dia/mes/año y faltan XX días para fin de año", siendo día, mes, y año , los actuales obtenidos a partir del objeto Date.

NOTA: En la zona recursos de la pestaña RA3 hay un ejemplo de como captura el evento click sobre un botón que te puede servir para este y los sucesivos ejercicios.

2. Vamos utilizar nuestros conocimientos de manipulación de cadenas en javascript, para crear un algoritmo de compresión de cadenas. El algoritmo consiste en sustituir rachas de caracteres repetidos por el número de repeticiones seguido del carácter. El algoritmo sólo actúa con cadenas de caracteres del alfabeto, por lo que arrojará un mensaje de error en caso de que la cadena contenga números. Si admite espacios, en cuyo caso se sustituirá el espacio por una interrogación "?".

Ejemplos de prueba:

Cadena de entrada: "holaaaa mundo" se transforma en "hol4a? mundo"

Cadena de entrada: "aaabbcaaaa" se transforma en "3a2bc4a"

 a). Crea una función de compresión que recibe la cadena y devuelve la cadena comprimida.

 b). Crea una función de descompresión que recibe una cadena en formato comprimido y devuelve la cadena original.

 Implementa una interfaz con dos botones que permita codificar y decodificar cadenas introducidas por el usuario.

3. Crea una pequeña interfaz con un botón que cada vez que el usuario hace click haya un contador en pantalla con el número de clicks acumulado. 

a) Utiliza la propiedad de window localStorage para almacenar el número de clicks realizados y que cuando vuelva a entrar otra vez en la web posteriormente continúe desde el número en que se quedó.

b) Si utilizamos una variable de tipo number para manipular el contador, llegará un momento en el que alcancemos el mayor entero con el que javascript es capaz de realizar operaciones de forma segura, alcanzado este número ya no aumentará el contador y aparecerá un mensaje de alerta "Ya no se pueden realizar nmás clicks".

4. Utiliza el método setTimeout para realizar una redirección de la página a otra que tu elijas, pasados 3 segundos desde la carga de la página

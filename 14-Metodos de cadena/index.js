//metodo "concat" concatena algo extra a una cadena string ya declarada
let cadPrueba = "Hola que onda soy Emmanuel Villalva sere un gran gran pero gran desarrollador";
let resultado = "";
let comparar = "";

//"concat" es igial que concatenar con un '+' una cadena a uan variable string ya declarada
resultado = cadPrueba.concat(" <b>Backend</b><br>");
document.write(`<b>concat: </b> ${resultado}` );

resultado = cadPrueba + " Backend<br>";//equivalente a usar "concat"
document.write(`<b>Equivalente a concat: </b> ${resultado}`);

/*"startWith" Compara que una cadena empiece con los mismos caracteres que otra y regresara
 "true"  de lo contrario regresara "false" */
resultado = "";
comparar = "Hola";
resultado = cadPrueba.startsWith(comparar)
document.write(`<b>startWith: </b> La cadena "<b>${cadPrueba}</b>" ¿empieza con los siguientes caracteres?: "<b>${comparar}</b>": <b>${resultado}</b> <br>`);

/**"endsWith" se encarga de comprarar que los ultimos caracteres de una cadea X sea igual a lso ultimos de otra cadena X
    y devuelve "true" si lso caracteres son los mismos  o "false" si no.*/
comparar = "dorere";
resultado = cadPrueba.endsWith(comparar);
document.write(`<b>endWith: </b> La cadena "<b>${cadPrueba}</b>" ¿termina con los siguinetes cararteres?: "<b>${comparar}</b>"?: <b>${resultado}</b> <br>`);

/* "includes" comprueba que una cadena se encuentre incluida dentro de otra cadena "X", y si se encuentra incluida
nos regresa "true" de lo contrario nos devuelve "false"*/
comparar = "gran"
resultado = cadPrueba.includes(comparar);
document.write(`<b>includes: </b>La cadena "<b>${comparar}</b>" se encuentra incluida en la cadena "<b>${cadPrueba}</b>"?: <b>${resultado}</b><br>`);


/*"indexOf" nos indica el indice de donde empieza alguna cadena de caracteres que queramos saber en que possicion se encuentra
en dado caso que no encuentre la cadena de caracteres arrojara un -1 */
resultado = cadPrueba.indexOf("soy");
document.write(`<b>indexOf: </b>La cadena que ingresaste empieza en el caracter numero: ${resultado}<br>`);

/*"lastIndexOf" nos busca una cadena dentro de otra pero empezando desde atras, si la encuentra nos indicara en que posicion la encontro*/
resultado = cadPrueba.lastIndexOf("gran");
document.write(`<b>lastIndexOf: </b> La cadena que ingresaste se encuentra en la pocision : "<b>${resultado}</b>" de la cadena "<b>${cadPrueba}</b>" empezando a buscar coincidencias desde lo ultimo<br>`);

/*"padStart" Nos rellena el principio de una cadena con caracteres que le pasemos para completar el total que le pasemos con los que ya estan en la cadena original*/
resultado = cadPrueba.padStart(100,"123456789 ")
document.write(`<b>padStart: </b>${resultado}<b>: la cadena tiene 100 caracteres</b><br>`);

/*"padEnd" Nos rellena el final de una cadena con caracteres que le pasemos para completar el total que le pasemos con los que ya estan en la cadena original*/
resultado = cadPrueba.padEnd(100,"123456789 ")
document.write(`<b>padEnd: </b>${resultado}<b>: la cadena tiene 100 caracteres</b><br>`);

/*"repeat" nos repite una cadena las veces que le indiquemos */
resultado = cadPrueba.repeat(4);
document.write(`<b>repeat: </b>${resultado} <br>`);

/*"substring" le indicamos de que numero hasta que numero de caracter nos musetre de cierta cadena  */
resultado = cadPrueba.substring(36, 77);
document.write(`<b>substring: </b> del caracter 36 al 77 de la cadena <b>${cadPrueba}</b> nos dice esto: <b>${resultado}</b><br>`);

/*"ToLowerCase" este metodo convierte toda una cadena en minusculas */
resultado = cadPrueba.toLowerCase();
document.write(`<b>lowerCase:</b> Todas las mayusculas de esta cadena fueraon convertidas a minusculas: ${resultado} <br>`);

/*"toUpperCase" este metodo nos convierte todas las minusculas a mayusculas de una cadena*/
resultado = cadPrueba.toUpperCase();
document.write(`<b>lowerCase:</b> Todas las mayusculas de esta cadena fueraon convertidas a mayusculas: ${resultado} <br>`);

/*"toString" este metodo nos cinvierte cualquier tipo de varible, array o cualquier otra cosa a una cadena de texto */
resultado = cadPrueba
//metodo "concat" concatena algo extra a una cadena string ya declarada
let cadPrueba = "Hola, que onda soy Emmanuel Villalva, sere un gran pero gran desarrollador";
let resultado = "";
let comparar = "";
//"concat" es igial que concatenar con un '+' una cadena a una variable string ya declarada
resultado = cadPrueba.concat(" <b>Backend</b><br>");
document.write(`<b>concat: </b> ${resultado}` );

resultado = cadPrueba + "<b> Backend</b><br>";//equivalente a usar "concat"
document.write(`<b>Equivalente a concat: </b> ${resultado}`);

/*"startWith" Compara que una cadena empiece con los mismos caracteres que otra y regresara
 "true"  de lo contrario regresara "false" */
resultado = "";
comparar = "Hola";
resultado = cadPrueba.startsWith(comparar)
document.write(`<b>startWith: </b> La cadena "<b>${cadPrueba}</b>" ¿empieza con los siguientes caracteres?: "${comparar}": <b>${resultado}</b> <br>`);

/**"endsWith" se encarga de comprarar que los ultimos caracteres de una cadea X sea igual a lso ultimos de otra cadena X
    y devuelve "true" si lso caracteres son los mismos  o "false" si no.*/
comparar = "dorere";
resultado = cadPrueba.endsWith(comparar);
document.write(`<b>endWith: </b> La cadena "<b>${cadPrueba}</b>" ¿termina con los siguinetes cararteres?: "<b>${comparar}</b>"?: <b>${resultado}</b> <br>`);

/* "includes" comprueba que una cadena se encuentre incluida dentro de otra cadena X, si se encuentra incluida
nos regresa "true" de lo contrario nos devuelve "false"*/
comparar = "gran"
resultado = cadPrueba.includes(comparar);
document.write(`<b>includes: </b>La cadena "<b>${comparar}</b>" se encuentra incluida en la cadena "<b>${cadPrueba}</b>"?: <b>${resultado}</b><br>`);


/*"indexOf" nos indica el indice de donde empieza alguna cadena de caracteres que queramos saber en que possicion se encuentra
en dado caso que no encuentre la cadena de caracteres arrojara un -1 */
resultado = cadPrueba.indexOf("soy");
document.write(`<b>indexOf: </b>La cadena <b>"soy"</b> empieza en el caracter numero <b>${resultado}</b> de la cadena:  ${cadPrueba}<br>`);

/*"lastIndexOf" nos busca una cadena dentro de otra pero empezando desde atras,si encuentra una o varias cadenas iguales nos indicara la primera de atras y nos indicara en que posicion la encontro*/
resultado = cadPrueba.lastIndexOf("gran");
document.write(`<b>lastIndexOf: </b> La cadena <b>gran</b> se encuentra en la pocision: "<b>${resultado}</b>" de la cadena "<b>${cadPrueba}</b>" empezando a buscar coincidencias desde lo ultimo<br>`);

/*"padStart" Nos rellena el principio de una cadena con caracteres que le pasemos para completar el total con los que ya estan en la cadena original*/
resultado = cadPrueba.padStart(100,"123456789 ")
document.write(`<b>padStart: </b>${resultado}<b>: la cadena tiene 100 caracteres</b><br>`);

/*"padEnd" Nos rellena el final de una cadena con caracteres que le pasemos para completar el total con los que ya estan en la cadena original*/
resultado = cadPrueba.padEnd(100,"123456789 ")
document.write(`<b>padEnd: </b>${resultado}<b>: la cadena tiene 100 caracteres</b><br>`);

/*"repeat" nos repite una cadena las veces que le indiquemos */
resultado = cadPrueba.repeat(4);
document.write(`<b>repeat: </b>${resultado} <br>`);



/**"split" nos divide la cadena a como le pidamos, nos convierte una cadena en un array donde podemos crear 
 * posiciones divididas por "comas" o "espacios" tambien si ponemos el nombre de sirta palabra que contiene la cadena 
 * esa palabra la omitira y al mandar a llamar solo existiran las pociones de las demas palabras
 */
resultado = cadPrueba.split(",");
document.write(`<b>split</b>${resultado[2]} <br>`);

/*"substring" le indicamos de que numero hasta que numero de caracter queremos que nos musetre de alguna cadena  */
resultado = cadPrueba.substring(37, 77);
document.write(`<b>substring: </b>Muestra del caracter 36 al 77 de la cadena: <b>${cadPrueba}</b>. quedaria asi: <b>${resultado}</b><br>`);

/*"ToLowerCase" este metodo convierte toda una cadena en minusculas */
resultado = cadPrueba.toLowerCase();
document.write(`<b>ToLowerCase:</b> Todas las mayusculas de esta cadena fueraon convertidas a minusculas: ${resultado} <br>`);

/*"toUpperCase" este metodo nos convierte todas las minusculas a mayusculas de una cadena*/
resultado = cadPrueba.toUpperCase();
document.write(`<b>toUpperCase:</b> Todas las minsculas de esta cadena fueraon convertidas a mayusculas: ${resultado} <br>`);

/*"toString" este metodo nos convierte cualquier tipo de varible, array o cualquier otra cosa a una cadena de texto */
let cadena = 3;
resultado = cadena.toString() + 2;
document.write(`<b>toString: </b> ${resultado} <br>`);

/*"trim"se encarga de eliminar los espacios vacios solo los del principio y final de cualquier cadenas de texto 
los espacios entremedio de la cadena quedan intactos y cuentan como un caracter con el metodo "trim"*/
cadena = "   Hola que onda  "
document.write(`<b>trim: </b> sin el metodo trim la cadena: <b>${cadena}</b> de texto tiene  ${cadena.length} caracteres<br>`);
cadena = cadena.trim();
document.write(`<b>trim: </b> con el metodo trim la cadena: <b>${cadena}</b> de texto tiene  ${cadena.length} caracteres<br>`);

/*"trimStart" se encarga de quitar los espacios vacios del principio de una cadena de texto */
cadena = "   Hola que onda  "
cadena = cadena.trimStart();
document.write(`<b>trimStart: </b> con el metodo trimStart la cadena de texto tiene  ${cadena.length} caracteres<br>`);

/*"trimEnd" se encarga de quitar los espacios vacios del principio de una cadena de texto */
cadena = "   Hola que onda  "
cadena = cadena.trimEnd();
document.write(`<b>trimEnd: </b> con el metodo trimEnd la cadena de texto tiene  ${cadena.length} caracteres<br>`);


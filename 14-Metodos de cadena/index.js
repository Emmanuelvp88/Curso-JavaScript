//metodo "concat" concatena algo extra a una cadena string ya declarada
let cadPrueba = "Hola que onda soy Emmanuel Villalva sere un gran desarrollador";
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
document.write(`<b>startWith: </b> La cadena "${cadPrueba}" ¿empieza con los siguientes caracteres?: "${comparar}": <b>${resultado}</b> <br>`);

/**"endsWith" se encarga de comprarar que los ultimos caracteres de una cadea X sea igual a lso ultimos de otra cadena X
    y devuelve "true" si lso caracteres son los mismos  o "false" si no.*/
comparar = "dor";
resultado = cadPrueba.endsWith(comparar);
document.write(`<b>endWith: </b> La cadena "${cadPrueba}" ¿termina con los siguinetes cararteres?: "${comparar}"?: <b>${resultado}</b> <br>`);

/* "includes" comprueba que una cadena se encuentre incluida dentro de otra cadena "X", y si se encuentra incluida
nos regresa "true" de lo contrario nos devuelve "false"*/
cadPrueba = "Emmanuel sera un programador exitoso"
comparar = "un"
resultado = cadPrueba.includes(comparar);
document.write(`<b>includes: </b>La cadena "<b>${comparar}</b>" se encuentra incluida en la cadena "<b>${cadPrueba}</b>"?: ${resultado}<br>`);


/*"indexOf" nos indica el indice de donde empieza alguna cadena de caracteres */

resultado = cadPrueba.indexOf("programador");
document.write(`<b>indexOf: </b>El index empieza en el caracter numero: ${resultado}`);
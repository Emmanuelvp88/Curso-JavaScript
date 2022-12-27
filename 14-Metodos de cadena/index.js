//metodo "concat" concatena algo extra a una cadena string ya declarada
let cadPrueba = "Hola que onda: ";
let resultado = "";

//"concat" es igial que concatenar con un '+' una cadena a uan variable string ya declarada
resultado = cadPrueba.concat("Villalva <br>");
document.write(resultado );

resultado = cadPrueba + "Emamnuel <br>";//equivalente a usar "concat"
document.write(resultado);

/*"startWith" Compara que una cadena empiece con los mismos caracteres que otra y regresara
 "true"  de lo contrario regresara "false" */
cadPrueba = "Probamos el segundo metodo"
let comparar = "Prob";
resultado = cadPrueba.startsWith(comparar)
document.write(`¿"cadPrueba" empieza con la misma linea de caracteres, que la cadena "comparar"?: ${resultado} <br>`);

/**"endsWith" se encarga de comprarar que los ultimos caracteres de una cadea X sea igual a lso ultimos de otra cadena X
    y devuelve "true" si lso caracteres son los mismos  o "false" si no.*/
comparar = "odo";
resultado = cadPrueba.endsWith(comparar);
document.write(`¿cadPrueba termina con la misma linea de cararteres que la cadena "comparar"?: ${resultado} <br>`);

/* "includes" comprueba que una cadena se encuentre incluida dentro de otra cadena "X", y si se encuentra incluida
nos regresa "true" de lo contrario nos devuelve "false"*/

cadPrueba = "Emmanuel sera un programador exitoso"
comparar = "un"
resultado = cadPrueba.includes(comparar);
document.write(`la cadena "<b>${comparar}</b>" se encuentra incluida en la cadena "<b>${cadPrueba}</b>"?: ${resultado}`);
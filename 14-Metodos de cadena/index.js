//metodo "concat" concatena algo extra a una cadena string ya declarada
let cadPrueba = "Hola que onda: ";
let resultado = "";

//"concat" es igial que concatenar con un '+' una cadena a uan variable string ya declarada
resultado = cadPrueba.concat("Villalva <br>");
document.write(resultado );

resultado = cadPrueba + "Emamnuel <br>";//equivalente a usar "concat"
document.write(resultado);

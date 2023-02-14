document.write(`<h2>Funcion 'saludar' con parametro</h2>`);
/* "saludar" es el nombre de la funcion y se le pasa un parametro dentro de los parantesis y posteriormente se define
cuando mandamos a llamar la funcion ahi es cuando sele da un valor de cualquier tipo, equivale a declarar una variable de forma local
y solo funcionara dentro de la misma funcion. */
function saludar(nombre) {
    // aqui declaramos una variable "frase" donde alojaremos una cadena de texto agregando nuestro parametro.
    let frase = `!Hola¡ ${nombre} Como estas? <br>`;
    //imprimimos la variable "frase"
    document.write(frase);
}
/*Invocamos la  funcion "saludar" le pedimos el parametro pendiente por definir "nombre"
y ejecutamos la funcion junto con el parametro ya definido sera igual a el nombre que ingrese el usuario mediante el "promt()"*/
saludar(prompt("Hola cual es tu nombre"));

document.write("<h2>Funcion 'Sumar' sin parametros</h2>");
/*esta es una funcion normall donde no pasamos parametros y no retornamos nada, solo declaramos unas variables
las cuales las vamos a sumar y posteriormente mostrar el resultado invocando la funcion*/
function suma() {
    let num1 = 23;
    let num2 = 32;
    let resultado = num1 + num2;
    document.write(`el resultado de tu suma es: ${resultado} <br>`);
}
/*invocamos la funcion "suma"  qe contiene lo toda la operacion y gracias al 'document.write()'
que tiene dentro la funcion podemos visualizar el resultado*/
suma();

document.write(`<h2>Otra manera de declarar funciones, Funcion 'comparar'</h2>`);
//Esat es otra manera de declarara las funciones, es poner primero el nombre de la funcion  despues declararla
iguales = function (x, y) {
    //Comparamos los parametros "x,y" dentro de la funcion y guardamos el resultado dentro de la variable "comparar"
    let comparar = x == y;
    //La cual retornamos, dandonos como resultado un valor voleano
    return comparar;
    /*El 'return' nos sirve para retornar un resultado y el cual tambien actua como un 'break' porque lo que venga
        despues de el ya no se ejecutara.*/
};
/*La funcion la guardamos dentro de una variable "resultado" la cual mostraremos a continuacion con un 'document.write()' 
    dependiendo los valores que le mandemos sera el resultado, en este caso comparamos si 8 */
let resultado = iguales("4", 4);
//Mostramos el resultado imprimindo la variable "resultado" que contiene a la funcion misma.
document.write(`El resultado de tu Comparacion es: ${resultado} <br>`);

document.write(`<h2>Funciones flecha</h2>`);
/*-------------Funciones Flecha--------- */
//Son las que vamos a utilizar de ahora en adelante.

/*La ventaja de las funciones tipo flecha esque cuando solo tenemos un parametro 'nombre' no es necesario
    encerrarlo en parentesis y cundo tenemos solo una exprecion o linea de codigo en el cuerpo de la funcion
    podemos no poner las llavez  {} ademas que todo se puede poner en una sola linea y se retorna automaticamente*/
const saludo = nombre => document.write(`Hola como estas ${nombre} <br>`);
saludo("Vato loco");

//Cuando tenemos mas de un parametro si se necesitan encerrar entre parantesis y en el cuerpo poner todo entre llavez.
const resta = (num1, num2) => {
    let resultado = num1 - num2;
    return resultado;
};
// Mostramos la funcion dentro del mismo 'document.write()' por ende se muestra lo que retornamos
document.write(`El resultado de tu resta es: ${resta(4, 10)} <br>`);

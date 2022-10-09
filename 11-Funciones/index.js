/* "saludar" es el nombre de la funcion y se le pasa un parametro dentro de los parantesis "nombre" 
    y posteriormente se define, sele da un valor, es como declarar una variable de forma local que solo funcionara dentro de estafuncion. */ 
function saludar(nombre) {
    // aqui solo guardamos en la variable "frase" una cadena de texto junto con el parametro.
    let frase = `!Hola¡ ${nombre} Como estas? <br>`;
    //mandamos a imprimir la variable "frase"
    document.write(frase);
}
// Mandamos a llamar a la funcion "saludar" le pasamos el parametro pendiente por definir "nombre"
// y ejecutara lo que tiene dentro junto con el parametro ya definido sera igual a esto: (nombre) = "Emmanuel"
saludar("Emmanuel");


/* en esta funcion "suma" declaramos unas variables las cuales las vamos a sumar y posteriormente 
    las vamos a retornar con "return"*/
function suma() {
    let num1 = 23;
    let num2 = 32;
    let res = num1 + num2;
    //retornamos la variable "res" que contiene el resultado de la suma
    return res;
}
//Guardamos la funcion "suma" en la varable "mostrar" la cual la mostramos econ un "document.write(mostrar)"
//practicamente la funcion "suma" contiene lo retornado que viene siendo elresultado de la suma "res"
let mostrar = suma();
document.write("El resultado de tu suma es: " + mostrar  + "<br>");


//Hay otra manera de declarara las funciones, es poner primero el nombre de la funcion  despues declararla
iguales = function (x, y) {
    //Comparamos los parametros dentro de la funcion "x,y" y guardamos el resultado dentro de la variable "resul"
    let comparar = x==y;
    //La cual retornamos, dandonos como resultado un valor voleano
    return comparar;
}
// La funcion la guardamos dentro de una variable "resultado" y  El resultado de la funcion sera lo que retornemos
// y dependera de los valores que le demos a los parametros dentro de la funcion "iguales(8,4)"
let resultado = iguales(8, 4);
//Mostramos el resultado imprimindo la variable "resultado" que contiene a la funcion misma.
document.write(`El resultado de tu Comparacion es: ${resultado} <br>`);


/*-------------Funciones Flecha--------- */
//Son las que vamos a utilizar de ahora en adelante.

/*La ventaja de las funciones tipo flecha esque cuando solo tenemos un parametro, no es necesario 
    encerrarla en parentesis y funcionan de igual forma*/
const saludo = nombre=>{
    document.write(`Hola como estas ${nombre} <br>`);
}
saludo("Emamnuel");


//Cuando tenemos mas de un parametro si se necesitan encerrar entre parantesis.
const resta = (num1, num2)=>{
    let resultado = num1 -num2;
    return resultado;
}
// let respuesta = resta(10 ,5);
document.write(`El resultado de tu resta es: ${resta(10, 4)}`);
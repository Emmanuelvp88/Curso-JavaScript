//METODOS DE UN ARRAY
                                //METODOS TRASFORMADORES
let array = ["jorge", "pedro", "juan"]
document.write(`Array original: <b>${array}</b> <br><br>`);

document.write("<b>pop(): </b> Quita el ultimo elemento de un array y lo devuenve en una variable <br>");
let ultimoElemento = array.pop();
document.write(`Devolviendo el ultimo elemento del array con "pop": <b> ${ultimoElemento}</b> <br><br>`);
document.write(`Sobrante del Array: <b>${array}</b><br>`)

document.write('Recordemos que el metodo "pop" va quitando el ultimo elemento del array como actualmente esta <br><br>')
//Es por eso que al final de todo el array solo nos quedan dos elementos

document.write(`<b>shift(): </b> Igual que "pop" solo que con el elemento del principio.<br>`);
array.push(" emmanuel", " carlos");
document.write(`<b>push(): </b> Agrega elementos al array al final de la lista: <b>${array}</b> <br> `);
document.write(`<b>reverse(): </b> invierte el orden de los elementos de un array: <b>${array.reverse()}</b> <br> `);
array.unshift("pablo", "lazaro")
document.write(`<b>unshift(): </b> Agraga uno o mas elementos al principio de un array y devuelve la nueva longitud del array. <b>${array}</b><br>`);
document.write(`<b>sort(): </b> Ordenas los elementos de un array localmente y los devuelve ya ordenados en el alfabeto lexicografico: <b>${array.sort()}</b><br><br>`);
//Los primeros dos parametros que le pasamos a "splice()" sirven para mandarle aquitar elementos y los demas para agregar 
array.splice(0, 2, "Suerte", "para", 3)
document.write(`<b>splice(): </b> Cambia el contenido de un array eliminando elementos y/o agregando nuevos. <b>: ${array}</b><br>`);
document.write('indicamos que eliminara los elementos del 0 al 2  y agregara otros 3 elemetos<br><br>');

                                //METODOS ACCESORES
document.write(`<b>join(): </b>Une los elementos de un array, y entremedio de cada elemento ponemos cualquier caracter que le indiquemos y lo devuelve como una sola cadena de texto: <b>${array.join("---")}</b><br><br>`);
document.write(`<b>slice(): </b>Devuelve una parte del array dentro de un nuevo array desde donde le indiquemos por ejemplo del [2,5]:  <b> ${array.slice(2, 5)}</b> <br>`);
// document.write(array)
document.write(`<b>includes(): </b> Nos indica si esta incluido cierto elemento dentro del array y nos devuelve "true" o "false". <b>${array.includes("pablo")}</b><br>`);
document.write(`<b>indexOf(): </b> Nos devuelve la posicion en la que se encuentra cierto elemneto que le indiquemos. <b>${array.indexOf('lazaro')}</b><br>`);
document.write(`<b>lastIndexOf(): </b> es lo mismo que "indexOf" nos devuelve el numero de posicion de cierto elemento pero empezando de atras hacia delante: ${array.lastIndexOf('lazaro')}<br><br><br>`);

            // DE REPETICION
//Filter() Recorre un array y crea un nuevo array  con los elementos que cumplan la condicion
let resultado = array.filter(numero => numero.length > 5)// devuelve los elementos del array que tengan menos de 5 caracteres contando espacios 
document.write(`<b>filter(): </b> Crea un nuevo array y muestra solo el elemento que cuampla con la condicion que se le ponga. mostrar elementos que contengan mas de 5 caracteres.<b>${resultado} </b><br>`);
let resultado2 = array.filter(numeros => array.length > 5);
document.write(`Tambien podemos mostramos el array solo con la condicion si tiene mas de 5 elementos dentro. <b>${resultado2}</b>. en Efeco tiene 6 elementos <br>`);
//forEach() solo nos permite recorer el contenido de un array
document.write(`<b>forEach(): </b> solo nos permite recorer un array como un bucle normal mediante una funcion.`);
array.forEach(numero => {document.write(`<b> ${numero}</b>`)});





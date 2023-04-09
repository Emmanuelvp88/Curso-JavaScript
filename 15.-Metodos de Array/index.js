//METODOS DE UN ARRAY
                                //METODOS TRASFORMADORES
document.write("<b>pop(): </b> Quita el ultimo elemento de un array y lo devuenve en una variable <br>");
let array = [" jorge ", " pedro ", " juan "]
document.write(`Array original: <b>${array}</b> <br>`);
array.pop();
document.write(`Array despues del metodo "pop": <b> ${array}</b> <br>`);
let ultimoElemento = array.pop();
document.write(`Mostramos el ultimo elemento: <b>${ultimoElemento}</b><br>`);
document.write(`Sobrante del Array: <b>${array}</b> <br>`)
//Recordemos que el metodo "pop" va quitando el ultimo elemento del array como actualmente esta
//Es por eso que al final de todo el array solo nos quedo con un solo elemento

document.write(`<b>shift(): </b> Igual que "pop" solo que con el elemento del principio.<br>`);
array.push(" emmanuel", " carlos");
document.write(`<b>push(): </b> Agregra un elemento al array al final de la lista: <b>${array}</b> <br> `);
document.write(`<b>reverse(): </b> invierte el orden de los elementos de un array: <b>${array.reverse()}</b> <br> `);
array.unshift("pablo", "emiliano")
document.write(`<b>unshift(): </b> Agraga uno o mas elementos al principio de un array y devuelve la nueva longitud del array. <b>${array}</b><br>`);
document.write(`<b>sort(): </b> Ordenas los elementos de un array localmente y los devuelve ya ordenados en el alfabeto lexicografico: <b>${array.sort()}</b><br>`);
//Los primeros dos parametros que le pasamos a "splice()" sirven para mandarle aquitar elementos y los demas para agregar 
array.splice(0, 2, "Suerte", "para", 3)
document.write(`<b>splice(): </b> Cambia el contenido de un array eliminando elementos y/o agregando nuevos. <b>: ${array}</b><br>`);

                                //METODOS ACCESORES
document.write(`<b>join(): </b>Une los elementos de un array, y entremedio de cada elemento ponemos cualquier caracter que le indiquemos y lo devuelve como una sola cadena de texto.<b>${array.join(" - ")}</b><br>`);
document.write(`<b>slice(): </b>Devuelve una parte del array dentro de un nuevo array empezando desde el inicio. <b> ${array.slice(0,-1)}</b> <br>`);
document.write(`<b>includes(): </b> Nos indica si esta incluido cierto elemento dentro del array y nos devuelve "true" o "false". <b>${array.includes("pablo")}</b><br>`);
document.write(`<b>indexOf(): </b> Nos devuelve la posicion en la que se encuentra el elemento. <b>${array.indexOf(3)}</b><br>`);
document.write(`<b>lastIndexOf(): </b> Nos devuelve la posicion en la que se encuentra cieto elemento dentro del array pero empezando de atras hacia delante.<br>`);

            // DE REPETICION
//Filter() es un bucle que recore un array y que puede usar condiciones como un bucle noermal
let resultado = array.filter(numero => numero.length > 5)// devuelve los elementos del array que tengan menos de 5 caracteres contando espacios 
let resultado2 = array.filter(numero => array.length > 4);      
document.write(`<b>filter(): </b> Crea un array con cada elemento que cuampla la condicion que le indiquemos. <b>${resultado}</b><br>`);
document.write(` Ahora mostramos el array si el numero de elemntos es mayor ala condicion.<b>${resultado2}</b><br>`);

//forEach() solo nos permite recorer el contenido de un array
resultado = array.forEach(numeros => array.length > 9);
document.write(`<b>forEach(): </b> solo nos permite recorer un bucle normalmente mediante una funcion. <b>${resultado}</b><br>`);



